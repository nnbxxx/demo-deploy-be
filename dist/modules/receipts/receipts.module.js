"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptsModule = void 0;
const common_1 = require("@nestjs/common");
const receipts_service_1 = require("./receipts.service");
const receipts_controller_1 = require("./receipts.controller");
const mongoose_1 = require("@nestjs/mongoose");
const receipt_schemas_1 = require("./schemas/receipt.schemas");
const products_module_1 = require("../products/products.module");
const carts_module_1 = require("../carts/carts.module");
const users_module_1 = require("../users/users.module");
const inventory_product_module_1 = require("../inventory-product/inventory-product.module");
const coupons_module_1 = require("../coupons/coupons.module");
const address_user_module_1 = require("../address-user/address-user.module");
const coupon_schemas_1 = require("../coupons/schemas/coupon.schemas");
let ReceiptsModule = class ReceiptsModule {
};
exports.ReceiptsModule = ReceiptsModule;
exports.ReceiptsModule = ReceiptsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: receipt_schemas_1.Receipt.name, schema: receipt_schemas_1.ReceiptSchema }, { name: coupon_schemas_1.Coupon.name, schema: coupon_schemas_1.CouponSchema }]),
            (0, common_1.forwardRef)(() => products_module_1.ProductsModule),
            carts_module_1.CartsModule,
            users_module_1.UsersModule,
            inventory_product_module_1.InventoryProductModule,
            coupons_module_1.CouponsModule,
            address_user_module_1.AddressUserModule],
        controllers: [receipts_controller_1.ReceiptsController],
        providers: [receipts_service_1.ReceiptsService],
        exports: [receipts_service_1.ReceiptsService]
    })
], ReceiptsModule);
//# sourceMappingURL=receipts.module.js.map