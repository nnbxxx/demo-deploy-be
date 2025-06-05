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
exports.LikeProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const like_products_service_1 = require("./like-products.service");
const update_like_product_dto_1 = require("./dto/update-like-product.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
let LikeProductsController = class LikeProductsController {
    constructor(likeProductsService) {
        this.likeProductsService = likeProductsService;
    }
    create(user) {
        return this.likeProductsService.create(user);
    }
    getCartByUser(user) {
        return this.likeProductsService.findByUser(user);
    }
    addItem(user, productLikeItem) {
        return this.likeProductsService.addProduct(productLikeItem, user);
    }
    removeCartItem(id, user) {
        return this.likeProductsService.removeProduct(id, user);
    }
    checkCartItem(id, user) {
        return this.likeProductsService.checkProductFavorite(id, user);
    }
    removeCart(user) {
        return this.likeProductsService.removeAll(user);
    }
};
exports.LikeProductsController = LikeProductsController;
__decorate([
    (0, customize_1.ResponseMessage)("Create a new LikeProducts User"),
    (0, common_1.Post)('/create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LikeProductsController.prototype, "create", null);
__decorate([
    (0, customize_1.ResponseMessage)("Get LikeProducts User"),
    (0, common_1.Get)('/user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LikeProductsController.prototype, "getCartByUser", null);
__decorate([
    (0, customize_1.ResponseMessage)("Add product to Cart User"),
    (0, common_1.Post)('/add'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_like_product_dto_1.AddLikeProductDto]),
    __metadata("design:returntype", void 0)
], LikeProductsController.prototype, "addItem", null);
__decorate([
    (0, customize_1.ResponseMessage)("Delete product to Cart User"),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LikeProductsController.prototype, "removeCartItem", null);
__decorate([
    (0, customize_1.ResponseMessage)("Check product  is like"),
    (0, common_1.Get)('/user/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LikeProductsController.prototype, "checkCartItem", null);
__decorate([
    (0, customize_1.ResponseMessage)("Remove All Cart User"),
    (0, common_1.Post)('/remove-all'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LikeProductsController.prototype, "removeCart", null);
exports.LikeProductsController = LikeProductsController = __decorate([
    (0, swagger_1.ApiTags)('like-products'),
    (0, common_1.Controller)('like-products'),
    __metadata("design:paramtypes", [like_products_service_1.LikeProductsService])
], LikeProductsController);
//# sourceMappingURL=like-products.controller.js.map