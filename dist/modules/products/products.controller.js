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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const customize_1 = require("../../decorator/customize");
const swagger_1 = require("@nestjs/swagger");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createProductDto, user) {
        return this.productsService.create(createProductDto, user);
    }
    findAll(currentPage, limit, qs) {
        return this.productsService.findAll(currentPage, limit, qs);
    }
    findOne(id) {
        return this.productsService.findOne(id);
    }
    findOneForUser(id, user) {
        return this.productsService.findOneForUser(id, user);
    }
    findImages(id) {
        return this.productsService.findImages(id);
    }
    findProductsRecentViewForUser(user) {
        return this.productsService.getProductsRecentViewByUser(user);
    }
    findProductsPurchasedForUser(user) {
        return this.productsService.getProductsPurchasedByUser(user);
    }
    update(updateProductDto, user) {
        return this.productsService.update(updateProductDto, user);
    }
    remove(id, user) {
        return this.productsService.remove(id, user);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    (0, customize_1.ResponseMessage)("Create a new Product"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch Product with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(':id'),
    (0, customize_1.ResponseMessage)("Fetch Product by id for non-members"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    (0, customize_1.ResponseMessage)("Fetch Product by id for members"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOneForUser", null);
__decorate([
    (0, common_1.Get)('/images/:id'),
    (0, customize_1.ResponseMessage)("Fetch Product by id for members"),
    openapi.ApiResponse({ status: 200, type: [String] }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findImages", null);
__decorate([
    (0, common_1.Get)('/product/recent'),
    (0, customize_1.ResponseMessage)("Fetch Products Recent View for members"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findProductsRecentViewForUser", null);
__decorate([
    (0, common_1.Get)('/product/purchased'),
    (0, customize_1.ResponseMessage)("Fetch Products Purchased  for members"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findProductsPurchasedForUser", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a Product"),
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, customize_1.ResponseMessage)("Delete a Product"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map