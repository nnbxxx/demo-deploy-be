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
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cart_schemas_1 = require("./schemas/cart.schemas");
const mongoose_2 = __importDefault(require("mongoose"));
const inventory_product_service_1 = require("../inventory-product/inventory-product.service");
const product_schemas_1 = require("../products/schemas/product.schemas");
let CartsService = class CartsService {
    constructor(cartModel, inventoryProductService) {
        this.cartModel = cartModel;
        this.inventoryProductService = inventoryProductService;
    }
    create(user) {
        return this.cartModel.create({
            user: user._id,
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
    }
    async findByUser(user) {
        const pop = [{
                path: "items.product",
                model: product_schemas_1.Product.name,
                select: "_id name price images "
            }
        ];
        const re = await this.cartModel
            .findOne({ user: user._id })
            .select("-__v -updatedAt -createdAt -isDeleted -deletedAt")
            .populate(pop);
        return re;
    }
    async removeProductToCart(idProduct, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(idProduct)) {
            throw new common_1.BadRequestException(`not found cart with id=${idProduct}`);
        }
        const foundCart = await this.findByUser(user);
        let newitem = foundCart.items.filter((id) => !id.equals(idProduct));
        foundCart.items = newitem;
        await foundCart.save();
        return await this.calcTotal(foundCart?._id);
    }
    async removeAllCartItem(user) {
        const foundCart = await this.cartModel.findOneAndUpdate({
            user: user._id,
        }, {
            $set: { items: [], total: 0 }
        }, { new: true });
        return foundCart;
    }
    async addProductToCart(cartItem, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(cartItem.product._id)) {
            throw new common_1.BadRequestException(`not found cart with id=${cartItem.product._id}`);
        }
        const isStock = await this.inventoryProductService.checkProductAvailability(cartItem.product);
        const foundCart = await this.findByUser(user);
        const isItemExist = await this.checkIsItemExit(cartItem, foundCart.items);
        if (!isItemExist) {
            await this.cartModel.findOneAndUpdate({
                user: user._id,
                items: { $elemMatch: { product: cartItem.product._id } },
            }, {
                $set: {
                    "items.$": {
                        product: cartItem.product._id,
                        color: cartItem.product?.color,
                        quantity: cartItem.product.quantity,
                        price: cartItem.product?.price,
                        size: cartItem.product?.size,
                    }
                },
            }, { new: true });
        }
        else {
            await this.cartModel.findByIdAndUpdate(foundCart._id, {
                $push: {
                    items: {
                        product: cartItem.product._id,
                        color: cartItem.product?.color,
                        quantity: cartItem.product.quantity,
                        price: cartItem.product?.price,
                        size: cartItem.product?.size,
                    }
                },
            }, { new: true });
        }
        return await this.calcTotal(foundCart?._id);
    }
    async checkIsItemExit(cartItem, userProductCart) {
        const itemExist = userProductCart.filter(item => {
            if (item.product) {
                if (item.product.equals(cartItem.product._id) && item?.color === cartItem?.product?.color && item?.size === cartItem?.product?.size)
                    return true;
                if (item.product.equals(cartItem.product._id) &&
                    (item.color !== cartItem.product.color || item.size !== cartItem.product.size)) {
                    return false;
                }
                return item.product.equals(cartItem.product._id);
            }
            return false;
        });
        return (itemExist.length === 0);
    }
    async calcTotal(cartId) {
        const found = await this.cartModel.findById(cartId);
        if (!found)
            throw new common_1.NotFoundException("Cart không tìm thấy");
        if (found.items.length === 0) {
            return await this.cartModel.
                findByIdAndUpdate(cartId, { $set: { total: 0 } }, { new: true });
        }
        const total = found.items.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity;
        }, 0);
        return await this.cartModel.
            findByIdAndUpdate(cartId, { $set: { total: total } }, { new: true });
    }
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schemas_1.Cart.name)),
    __metadata("design:paramtypes", [Object, inventory_product_service_1.InventoryProductService])
], CartsService);
//# sourceMappingURL=carts.service.js.map