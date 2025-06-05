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
exports.InventoryProductController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const inventory_product_service_1 = require("./inventory-product.service");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
const create_import_product_dto_1 = require("./dto/create-import-product.dto");
let InventoryProductController = class InventoryProductController {
    constructor(inventoryProductService) {
        this.inventoryProductService = inventoryProductService;
    }
    findAll(currentPage, limit, qs) {
        return this.inventoryProductService.findAll(currentPage, limit, qs);
    }
    findOne(id) {
        return this.inventoryProductService.findOne(id);
    }
    async manageStock(importStockDto, user) {
        return this.inventoryProductService.manageStock(importStockDto.productId, importStockDto.variants, user);
    }
};
exports.InventoryProductController = InventoryProductController;
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch InventoryProduct with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], InventoryProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, customize_1.ResponseMessage)("Fetch InventoryProduct by id "),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('import-stock'),
    (0, customize_1.ResponseMessage)("Create a import InventoryProduct"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_import_product_dto_1.ImportStockDto, Object]),
    __metadata("design:returntype", Promise)
], InventoryProductController.prototype, "manageStock", null);
exports.InventoryProductController = InventoryProductController = __decorate([
    (0, swagger_1.ApiTags)('inventory-product'),
    (0, common_1.Controller)('inventory-product'),
    __metadata("design:paramtypes", [inventory_product_service_1.InventoryProductService])
], InventoryProductController);
//# sourceMappingURL=inventory-product.controller.js.map