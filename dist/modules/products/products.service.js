"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_schemas_1 = require("./schemas/product.schemas");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importStar(require("mongoose"));
const api_query_params_1 = __importDefault(require("api-query-params"));
const users_service_1 = require("../users/users.service");
const inventory_product_service_1 = require("../inventory-product/inventory-product.service");
const reviews_service_1 = require("../reviews/reviews.service");
const categories_service_1 = require("../categories/categories.service");
const user_schema_1 = require("../users/schemas/user.schema");
const notifications_service_1 = require("../../notifications/notifications.service");
const notifications_gateway_1 = require("../../notifications/notifications.gateway");
const inventory_product_schemas_1 = require("../inventory-product/schemas/inventory-product.schemas");
let ProductsService = class ProductsService {
    constructor(inventoryProductModel, productModel, userService, userModel, inventoryProductService, reviewService, categoriesService, notificationsGateway, notificationsService) {
        this.inventoryProductModel = inventoryProductModel;
        this.productModel = productModel;
        this.userService = userService;
        this.userModel = userModel;
        this.inventoryProductService = inventoryProductService;
        this.reviewService = reviewService;
        this.categoriesService = categoriesService;
        this.notificationsGateway = notificationsGateway;
        this.notificationsService = notificationsService;
    }
    async create(createProductDto, user) {
        const { brand, category, description, images, name, tags, features, variants, code } = createProductDto;
        const existingProduct = await this.productModel.findOne({ code });
        if (existingProduct) {
            throw new common_1.BadRequestException('Mã sản phẩm (code) đã tồn tại.');
        }
        const product = await this.productModel.create({
            brand,
            category,
            description,
            images,
            name,
            tags,
            features,
            variants, code,
            createdBy: {
                _id: user._id,
                email: user.email,
            },
        });
        let dataVariants;
        if (variants && variants.length) {
            dataVariants = variants.map((variant) => {
                const variantData = {
                    attributes: {}
                };
                if (features.includes('color') && variant.attributes.color) {
                    variantData.attributes.color = variant.attributes.color.name;
                }
                if (features.includes('size') && variant.attributes.size) {
                    variantData.attributes.size = variant.attributes.size.name;
                }
                if (features.includes('material') && variant.attributes.material) {
                    variantData.attributes.material = variant.attributes.material.name;
                }
                variantData.importPrice = 0;
                variantData.exportPrice = 0;
                variantData.stock = 0;
                variantData.sellPrice = 0;
                return variantData;
            });
        }
        else {
            dataVariants = [{ importPrice: 0, exportPrice: 0, stock: 0, sellPrice: 0 }];
        }
        const inventoryProductDto = {
            productId: product._id.toString(),
            productVariants: dataVariants,
        };
        await this.inventoryProductService.create(inventoryProductDto, user);
        await this.sendNewProductNotification(product);
        return product;
    }
    async sendNewProductNotification(product) {
        const listUser = await this.userModel.find({}, '_id').exec();
        listUser.forEach(async (user) => {
            this.notificationsService.create({
                message: `Có sản phẩm mới: ${product.name}`,
                title: `Có sản phẩm mới: ${product.name}`,
                userId: user,
                navigate: `${process.env.FE_URI}product/${product._id}`,
            });
            const connectSocketId = await this.userService.checkConnectSocketIo(user);
            if (connectSocketId !== null) {
                this.notificationsGateway.sendNotification({
                    message: `Có sản phẩm mới: ${product.name}`,
                    title: `Có sản phẩm mới: ${product.name}`,
                    userId: user,
                }, connectSocketId);
            }
        });
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        const offset = (+currentPage - 1) * +limit;
        const defaultLimit = +limit || 1000;
        const totalItems = await this.productModel.countDocuments(filter);
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const products = await this.productModel
            .find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .populate(population)
            .exec();
        const resultssss = await this.addInforInventoryProduct(products);
        return {
            meta: {
                current: currentPage,
                pageSize: limit,
                pages: totalPages,
                total: totalItems,
            },
            result: resultssss,
        };
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`Invalid product ID: ${id}`);
        }
        const product = await (await this.productModel.findById(id)).populate("category");
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        const productInventory = await this.inventoryProductService.findByProductId(id);
        const quantityComments = await this.reviewService.getQuantityComment(id);
        const newData = {
            product: { ...product.toObject() },
            quantityComments: +quantityComments,
            inventory: {
                productInventory
            }
        };
        return newData;
    }
    async findOneForUser(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found product with id=${id}`);
        }
        this.userService.updateRecentViewProduct(user, id);
        const product = await this.productModel.findById(id).exec();
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        const productInventory = await this.inventoryProductService.findByProductId(id);
        const quantityComments = await this.reviewService.getQuantityComment(id);
        const newData = {
            product: { ...product.toObject() },
            quantityComments: +quantityComments,
            inventory: {
                productInventory
            }
        };
        return newData;
    }
    async findImages(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found product with id=${id}`);
        }
        const data = await this.productModel.findById(id);
        return data.images;
    }
    async update(updateProductDto, user) {
        const { _id, brand, category, description, images, name, tags, features, variants, code, } = updateProductDto;
        const existingProduct = await this.productModel.findById(_id);
        if (!existingProduct) {
            throw new common_1.NotFoundException('Sản phẩm không tồn tại.');
        }
        if (code && code !== existingProduct.code) {
            const codeExisted = await this.productModel.findOne({ code });
            if (codeExisted) {
                throw new common_1.BadRequestException('Mã sản phẩm (code) đã tồn tại.');
            }
        }
        const updatedProduct = await this.productModel.findByIdAndUpdate(_id, {
            brand,
            category,
            description,
            images,
            name,
            tags,
            features,
            code,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
        }, { new: true });
        let existingVariants = existingProduct.variants || [];
        let newVariants = variants || [];
        newVariants = newVariants.filter((newVariant) => {
            return !existingVariants.some((existingVariant) => JSON.stringify(existingVariant.attributes) ===
                JSON.stringify(newVariant.attributes));
        });
        const updatedVariants = [...existingVariants, ...newVariants];
        updatedProduct.variants = updatedVariants;
        let dataVariants = [];
        if (updatedVariants.length) {
            dataVariants = updatedVariants.map((variant) => {
                const variantData = {
                    attributes: {},
                };
                if (features.includes('color') && variant.attributes.color) {
                    variantData.attributes.color = variant.attributes.color.name;
                }
                if (features.includes('size') && variant.attributes.size) {
                    variantData.attributes.size = variant.attributes.size.name;
                }
                if (features.includes('material') && variant.attributes.material) {
                    variantData.attributes.material = variant.attributes.material.name;
                }
                variantData.importPrice = variant.importPrice ?? 0;
                variantData.exportPrice = variant.exportPrice ?? 0;
                variantData.stock = variant.stock ?? 0;
                variantData.sellPrice = variant.sellPrice ?? 0;
                return variantData;
            });
        }
        const inventoryUpdateDto = {
            productId: _id,
            productVariants: dataVariants,
        };
        await this.inventoryProductService.update(inventoryUpdateDto, user);
        await updatedProduct.save();
        return updatedProduct;
    }
    async remove(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found product with id=${id}`);
        }
        await this.productModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        return this.productModel.softDelete({ _id: id });
    }
    async getProductsRecentViewByUser(user) {
        const userDB = (await this.userService.findOne(user._id));
        const recentViews = userDB.recentViewProducts;
        const recentProductIds = recentViews.map((item) => item.productId);
        const products = await this.productModel
            .find({ _id: { $in: recentProductIds } })
            .select(['_id', 'name', 'images', 'brand', 'rating', 'category'])
            .populate('category')
            .exec();
        const productsWithInventory = await this.addInforInventoryProduct(products);
        const timeViewMap = new Map(recentViews.map((item) => [item.productId.toString(), item.timeView]));
        const result = productsWithInventory.map((product) => ({
            ...product,
            timeView: timeViewMap.get(product._id.toString()) || null,
        }));
        return result;
    }
    async getProductsPurchasedByUser(user) {
        const userDB = (await this.userService.findOne(user._id));
        const products = await this.productModel
            .find({ _id: { $in: userDB.purchasedProducts.map(id => new mongoose_2.Types.ObjectId(id)) } })
            .select(['_id', 'name', 'images', 'brand', 'rating', 'category'])
            .populate('category')
            .exec();
        const result = await this.addInforInventoryProduct(products);
        return result;
    }
    async addInforInventoryProduct(products) {
        const productIds = products.map((product) => product._id);
        const inventoryList = await this.inventoryProductModel
            .find({ productId: { $in: productIds } })
            .exec();
        const inventoryMap = new Map(inventoryList.map((inv) => [inv.productId.toString(), inv]));
        const result = products.map((product) => {
            const inventory = inventoryMap.get(product._id.toString());
            return {
                ...product.toObject(),
                inventory: inventory || null,
            };
        });
        return result;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(inventory_product_schemas_1.InventoryProduct.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __param(3, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => reviews_service_1.ReviewsService))),
    __metadata("design:paramtypes", [Object, Object, users_service_1.UsersService, Object, inventory_product_service_1.InventoryProductService,
        reviews_service_1.ReviewsService,
        categories_service_1.CategoriesService,
        notifications_gateway_1.NotificationsGateway,
        notifications_service_1.NotificationsService])
], ProductsService);
//# sourceMappingURL=products.service.js.map