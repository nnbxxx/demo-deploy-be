"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const inventory_product_schemas_1 = require("./schemas/inventory-product.schemas");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_2 = __importDefault(require("mongoose"));
const schema_enum_1 = require("../../constants/schema.enum");
let InventoryProductService = class InventoryProductService {
    constructor(inventoryProductModel) {
        this.inventoryProductModel = inventoryProductModel;
    }
    create(createInventoryProductDto, user) {
        return this.inventoryProductModel.create({
            ...createInventoryProductDto,
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.inventoryProductModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.inventoryProductModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select([])
            .populate(population)
            .exec();
        return {
            meta: {
                current: currentPage,
                pageSize: limit,
                pages: totalPages,
                total: totalItems
            },
            result
        };
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found inventoryProduct with id=${id}`);
        }
        return await this.inventoryProductModel.findById(id);
    }
    async findByProductId(productId) {
        if (!mongoose_2.default.Types.ObjectId.isValid(productId)) {
            throw new common_1.BadRequestException(`not found inventoryProduct with id=${productId}`);
        }
        return await this.inventoryProductModel.findOne({
            productId: productId
        });
    }
    async getProductPurchased(productId) {
        if (!mongoose_2.default.Types.ObjectId.isValid(productId)) {
            throw new common_1.NotFoundException(`not found product with id=${productId}`);
        }
        return this.inventoryProductModel.findOne({ productId }).select(['reservations']);
    }
    async updateReceiptUser(receiptItems, user) {
        receiptItems.map(async (item) => {
            const { price, color, _id, name, size } = item.product;
            const { quantity } = item;
            const inventory = await this.findByProductId(_id);
            if (!inventory) {
                throw new common_1.NotFoundException('Product not found');
            }
            let variantIndex = null;
            variantIndex = inventory.productVariants.findIndex(v => {
                const attr = v.attributes || {};
                return (!color || attr.color === color) &&
                    (!size || attr.size === size);
            });
            let newVariant;
            if (variantIndex !== -1) {
                const { stock, discount, importPrice, exportPrice, attributes, sellPrice } = inventory.productVariants[variantIndex];
                if (stock - quantity < 0) {
                    throw new common_1.BadRequestException("Not Enough Product in Inventory");
                }
                inventory.productVariants.splice(variantIndex, 1);
                newVariant = {
                    attributes,
                    importPrice: importPrice,
                    exportPrice,
                    stock: stock - quantity,
                    discount: discount,
                    sellPrice: sellPrice
                };
                if (color)
                    newVariant.attributes.color = color;
                if (size)
                    newVariant.attributes.size = size;
                inventory.productVariants.push(newVariant);
                inventory.totalQuantity -= quantity;
                inventory.totalQuantitySell += quantity;
                inventory.stockHistory.push({
                    userId: user._id,
                    quantity: quantity,
                    price: sellPrice * quantity,
                    action: schema_enum_1.INVENTORY_ACTION.EXPORT,
                    date: new Date(),
                    variants: attributes
                });
            }
            await inventory.save();
        });
    }
    async getTopProductsWithReservations() {
        const results = await this.inventoryProductModel
            .aggregate([
            {
                $addFields: {
                    totalQuantityBought: {
                        $sum: '$reservations.quantity',
                    },
                },
            },
            { $sort: { totalQuantityBought: -1 } },
            { $limit: 10 },
        ])
            .exec()
            .then((data) => this.inventoryProductModel.populate(data, { path: 'productId', select: 'name' }));
        return results.map((item) => ({
            name: item.productId.name,
            totalQuantityBought: item.totalQuantityBought,
        }));
    }
    async manageStock(productId, variants, user, type = schema_enum_1.INVENTORY_ACTION.IMPORT) {
        const inventory = await this.inventoryProductModel.findOne({ productId });
        if (!inventory) {
            throw new common_1.NotFoundException("Sản phẩm không tồn tại trong kho.");
        }
        if (type === schema_enum_1.INVENTORY_ACTION.IMPORT) {
            let totalAdded = 0;
            let totalImportValue = 0;
            variants.forEach(({ color, size, material, quantity, importPrice, exportPrice, discount }) => {
                let variantIndex = null;
                let oldStock = 0;
                const isNoAttributes = !color && !size && !material;
                if (isNoAttributes) {
                    variantIndex = inventory.productVariants.findIndex(v => !v.attributes || Object.keys(v.attributes).length === 0);
                }
                else {
                    variantIndex = inventory.productVariants.findIndex(v => {
                        const attr = v.attributes || {};
                        return (!color || attr.color === color) &&
                            (!size || attr.size === size) &&
                            (!material || attr.material === material);
                    });
                }
                let oldExportPrice;
                if (variantIndex !== -1) {
                    const { stock, discount, importPrice } = inventory.productVariants[variantIndex];
                    oldStock = stock;
                    oldExportPrice = (importPrice * stock);
                    inventory.productVariants.splice(variantIndex, 1);
                }
                const newPrice = (oldExportPrice + quantity * importPrice) / (quantity + oldStock) * (100 - discount) * (100 + exportPrice) / (100 * 100);
                const newImportPrice = (oldExportPrice + quantity * importPrice) / (quantity + oldStock);
                let newVariant = {
                    attributes: {},
                    importPrice: newImportPrice,
                    exportPrice,
                    stock: quantity + oldStock,
                    discount: discount ?? 0,
                    sellPrice: newPrice
                };
                if (color)
                    newVariant.attributes.color = color;
                if (size)
                    newVariant.attributes.size = size;
                if (material)
                    newVariant.attributes.material = material;
                inventory.productVariants.push(newVariant);
                totalAdded += quantity;
                totalImportValue += importPrice * quantity;
            });
            inventory.totalQuantity += totalAdded;
            inventory.stockHistory.push({
                userId: user._id,
                quantity: totalAdded,
                price: totalImportValue,
                action: type,
                date: new Date(),
                variants: variants
            });
            await inventory.save();
            return { message: "Nhập hàng thành công", totalAdded };
        }
    }
    async checkProductAvailability(product) {
        const { _id, quantity, color, size } = product;
        const inventory = await this.inventoryProductModel.findOne({ productId: _id });
        if (!inventory) {
            throw new common_1.BadRequestException(`not found product with id=${product._id}`);
        }
        const matchedVariant = inventory.productVariants.find(variant => {
            const attributes = variant.attributes;
            return (attributes.color === color &&
                attributes.size === size);
        });
        if (!matchedVariant) {
            throw new common_1.BadRequestException(`not found varients with color=${product.color} and size= ${product.size}`);
        }
        if (matchedVariant.stock < quantity) {
            throw new common_1.BadRequestException(`not enough product`);
        }
        return true;
    }
    async update(updateInventoryProduct, user) {
        const { productId, productVariants } = updateInventoryProduct;
        const existingInventory = await this.inventoryProductModel.findOne({ productId });
        if (!existingInventory) {
            throw new common_1.BadRequestException(`Not found inventory product with id =${productId}`);
        }
        const existingVariants = existingInventory.productVariants || [];
        const isSameVariant = (a, b) => {
            return a.attributes.color === b.attributes.color &&
                a.attributes.size === b.attributes.size &&
                a.attributes.material === b.attributes.material;
        };
        const newVariants = productVariants.filter(newVar => {
            return !existingVariants.some(existingVar => isSameVariant(newVar, existingVar));
        });
        if (newVariants.length === 0) {
            return existingInventory;
        }
        const updatedVariants = [...existingVariants, ...newVariants];
        return this.inventoryProductModel.findOneAndUpdate({ productId }, {
            productVariants: updatedVariants,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
            updatedAt: new Date(),
        }, { new: true });
    }
};
exports.InventoryProductService = InventoryProductService;
exports.InventoryProductService = InventoryProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(inventory_product_schemas_1.InventoryProduct.name)),
    __metadata("design:paramtypes", [Object])
], InventoryProductService);
//# sourceMappingURL=inventory-product.service.js.map