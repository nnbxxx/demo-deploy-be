"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const dashboard_controller_1 = require("./dashboard.controller");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schemas_1 = require("../modules/blog/schemas/blog.schemas");
const user_schema_1 = require("../modules/users/schemas/user.schema");
const receipt_schemas_1 = require("../modules/receipts/schemas/receipt.schemas");
const inventory_product_module_1 = require("../modules/inventory-product/inventory-product.module");
const brand_schemas_1 = require("../brand/schemas/brand.schemas");
const inventory_product_schemas_1 = require("../modules/inventory-product/schemas/inventory-product.schemas");
const like_product_schemas_1 = require("../modules/like-products/schemas/like-product.schemas");
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: blog_schemas_1.Blog.name, schema: blog_schemas_1.BlogSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: receipt_schemas_1.Receipt.name, schema: receipt_schemas_1.ReceiptSchema },
                { name: brand_schemas_1.Brand.name, schema: brand_schemas_1.BrandSchema },
                { name: inventory_product_schemas_1.InventoryProduct.name, schema: inventory_product_schemas_1.InventoryProductSchema },
                { name: receipt_schemas_1.Receipt.name, schema: receipt_schemas_1.ReceiptSchema },
                { name: like_product_schemas_1.LikeProduct.name, schema: like_product_schemas_1.LikeProductSchema },
            ]),
            inventory_product_module_1.InventoryProductModule
        ],
        controllers: [dashboard_controller_1.DashboardController],
        providers: [dashboard_service_1.DashboardService],
        exports: [dashboard_service_1.DashboardService]
    })
], DashboardModule);
//# sourceMappingURL=dashboard.module.js.map