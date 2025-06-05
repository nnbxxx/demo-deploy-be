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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const carts_service_1 = require("./carts.service");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
let CartsController = class CartsController {
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    create(user) {
        return this.cartsService.create(user);
    }
    getCartByUser(user) {
        return this.cartsService.findByUser(user);
    }
    addItem(user, CartItem) {
        return this.cartsService.addProductToCart(CartItem, user);
    }
    updateItem(user, updateCartDto) {
        return this.cartsService.addProductToCart(updateCartDto, user);
    }
    removeCartItem(id, user) {
        return this.cartsService.removeProductToCart(id, user);
    }
    removeCart(user) {
        return this.cartsService.removeAllCartItem(user);
    }
};
exports.CartsController = CartsController;
__decorate([
    (0, customize_1.ResponseMessage)("Create a new Cart User"),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "create", null);
__decorate([
    (0, customize_1.ResponseMessage)("Get Cart User"),
    (0, common_1.Get)('/user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "getCartByUser", null);
__decorate([
    (0, customize_1.ResponseMessage)("Add product to Cart User"),
    (0, common_1.Post)('/add'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_cart_dto_1.CartItem]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "addItem", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update product to Cart User"),
    (0, common_1.Post)('/update'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_cart_dto_1.CartItem]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "updateItem", null);
__decorate([
    (0, customize_1.ResponseMessage)("Delete product to Cart User"),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "removeCartItem", null);
__decorate([
    (0, customize_1.ResponseMessage)("Remove All Cart User"),
    (0, common_1.Post)('/remove-all'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartsController.prototype, "removeCart", null);
exports.CartsController = CartsController = __decorate([
    (0, swagger_1.ApiTags)('carts'),
    (0, common_1.Controller)('carts'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsController);
//# sourceMappingURL=carts.controller.js.map