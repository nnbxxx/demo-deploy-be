"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_schemas_1 = require("./schemas/product.schemas");
const users_module_1 = require("../users/users.module");
const inventory_product_module_1 = require("../inventory-product/inventory-product.module");
const reviews_module_1 = require("../reviews/reviews.module");
const categories_module_1 = require("../categories/categories.module");
const notifications_module_1 = require("../../notifications/notifications.module");
const user_schema_1 = require("../users/schemas/user.schema");
const inventory_product_schemas_1 = require("../inventory-product/schemas/inventory-product.schemas");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: product_schemas_1.Product.name, schema: product_schemas_1.ProductSchema }, { name: user_schema_1.User.name, schema: user_schema_1.UserSchema }, { name: inventory_product_schemas_1.InventoryProduct.name, schema: inventory_product_schemas_1.InventoryProductSchema }]),
            users_module_1.UsersModule,
            inventory_product_module_1.InventoryProductModule,
            (0, common_1.forwardRef)(() => reviews_module_1.ReviewsModule),
            categories_module_1.CategoriesModule, notifications_module_1.NotificationsModule],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
        exports: [products_service_1.ProductsService]
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map