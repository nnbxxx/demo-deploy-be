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
exports.LikeProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const like_product_schemas_1 = require("./schemas/like-product.schemas");
const mongoose_2 = __importDefault(require("mongoose"));
const product_schemas_1 = require("../products/schemas/product.schemas");
const inventory_product_service_1 = require("../inventory-product/inventory-product.service");
const category_Schemas_1 = require("../categories/schemas/category.Schemas");
const products_service_1 = require("../products/products.service");
let LikeProductsService = class LikeProductsService {
    constructor(likeProductModel, inventoryProductService, productService) {
        this.likeProductModel = likeProductModel;
        this.inventoryProductService = inventoryProductService;
        this.productService = productService;
    }
    create(user) {
        return this.likeProductModel.create({
            user: user._id,
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
    }
    async findByUser(user) {
        let re = await this.likeProductModel
            .findOne({ user: user._id })
            .select("-__v -updatedAt -createdAt -isDeleted -deletedAt")
            .populate({
            path: "items",
            model: product_schemas_1.Product.name,
            select: "_id name price images brand rating category",
            populate: {
                path: "category",
                model: category_Schemas_1.Category.name,
                select: "_id name"
            }
        });
        const itemsWithInventory = await this.productService.addInforInventoryProduct(re.items);
        let newdata = {
            ...re.toObject(),
            items: itemsWithInventory
        };
        return newdata;
    }
    async removeProduct(idProduct, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(idProduct)) {
            throw new common_1.BadRequestException(`Not found product with id=${idProduct}`);
        }
        const foundCart = await this.likeProductModel.findOne({ user: user._id });
        if (!foundCart) {
            throw new common_1.BadRequestException(`Like Product not found for user with id=${user._id}`);
        }
        const productIndex = foundCart.items.findIndex((item) => {
            return item.equals(new mongoose_2.default.Types.ObjectId(idProduct));
        });
        if (productIndex === -1) {
            throw new common_1.BadRequestException(`Like Product with id=${idProduct} not found`);
        }
        foundCart.items.splice(productIndex, 1);
        await foundCart.save();
        return foundCart;
    }
    async removeAll(user) {
        const foundCart = await this.likeProductModel.findOneAndUpdate({
            user: user._id,
        }, {
            $set: { items: [] }
        }, { new: true });
        return foundCart;
    }
    async addProduct(productLikeItem, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(productLikeItem._id)) {
            throw new common_1.BadRequestException(`not found product with id=${productLikeItem._id}`);
        }
        const foundProducts = await this.likeProductModel
            .findOne({ user: user._id })
            .select("-__v -updatedAt -createdAt");
        const isItemExist = await this.checkIsItemExit(productLikeItem._id, foundProducts.items);
        const { items } = foundProducts;
        if (isItemExist) {
            foundProducts.items = [...items, new mongoose_2.default.Types.ObjectId(productLikeItem._id)];
            await foundProducts.save();
        }
        return foundProducts;
    }
    async checkIsItemExit(productId, userProductList) {
        return !userProductList.some(item => item.equals(productId));
    }
    async checkProductFavorite(productId, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(productId)) {
            throw new common_1.BadRequestException(`Not found product with id=${productId}`);
        }
        const foundCart = await this.likeProductModel.findOne({ user: user._id });
        if (!foundCart) {
            return { checkProduct: false };
        }
        const isProductFavorite = foundCart.items.some((item) => item.equals(new mongoose_2.default.Types.ObjectId(productId)));
        return { checkProduct: isProductFavorite };
    }
};
exports.LikeProductsService = LikeProductsService;
exports.LikeProductsService = LikeProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(like_product_schemas_1.LikeProduct.name)),
    __metadata("design:paramtypes", [Object, inventory_product_service_1.InventoryProductService,
        products_service_1.ProductsService])
], LikeProductsService);
//# sourceMappingURL=like-products.service.js.map