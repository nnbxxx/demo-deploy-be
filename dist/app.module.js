"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth/auth.module");
const soft_delete_plugin_mongoose_1 = require("soft-delete-plugin-mongoose");
const mail_module_1 = require("./mail/mail.module");
const users_module_1 = require("./modules/users/users.module");
const products_module_1 = require("./modules/products/products.module");
const categories_module_1 = require("./modules/categories/categories.module");
const carts_module_1 = require("./modules/carts/carts.module");
const addresses_module_1 = require("./modules/address/addresses.module");
const receipts_module_1 = require("./modules/receipts/receipts.module");
const schedule_1 = require("@nestjs/schedule");
const reviews_module_1 = require("./modules/reviews/reviews.module");
const like_products_module_1 = require("./modules/like-products/like-products.module");
const coupons_module_1 = require("./modules/coupons/coupons.module");
const notifications_module_1 = require("./notifications/notifications.module");
const notifications_gateway_1 = require("./notifications/notifications.gateway");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const files_module_1 = require("./modules/files/files.module");
const inventory_product_module_1 = require("./modules/inventory-product/inventory-product.module");
const address_user_module_1 = require("./modules/address-user/address-user.module");
const permissions_module_1 = require("./modules/permissions/permissions.module");
const databases_module_1 = require("./databases/databases.module");
const message_module_1 = require("./modules/message/message.module");
const chat_rooms_module_1 = require("./modules/chat-rooms/chat-rooms.module");
const color_module_1 = require("./color/color.module");
const brand_module_1 = require("./brand/brand.module");
const blog_category_module_1 = require("./blog-category/blog-category.module");
const blog_module_1 = require("./modules/blog/blog.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const chat_ai_module_1 = require("./chat-ai/chat-ai.module");
const gateway_module_1 = require("./gateway/gateway.module");
const vector_store_service_1 = require("./vector-store/vector-store.service");
const vector_store_module_1 = require("./vector-store/vector-store.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                    connectionFactory: (connection) => {
                        connection.plugin(soft_delete_plugin_mongoose_1.softDeletePlugin);
                        return connection;
                    },
                }),
            }),
            throttler_1.ThrottlerModule.forRoot(),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            products_module_1.ProductsModule,
            categories_module_1.CategoriesModule,
            carts_module_1.CartsModule,
            addresses_module_1.AddressModule,
            receipts_module_1.ReceiptsModule,
            reviews_module_1.ReviewsModule,
            like_products_module_1.LikeProductsModule,
            coupons_module_1.CouponsModule,
            notifications_module_1.NotificationsModule,
            cloudinary_module_1.CloudinaryModule,
            files_module_1.FilesModule,
            inventory_product_module_1.InventoryProductModule,
            address_user_module_1.AddressUserModule,
            permissions_module_1.PermissionsModule,
            databases_module_1.DatabasesModule,
            chat_rooms_module_1.ChatRoomsModule,
            message_module_1.MessageModule,
            color_module_1.ColorModule,
            brand_module_1.BrandModule,
            blog_category_module_1.BlogCategoryModule,
            blog_module_1.BlogModule,
            dashboard_module_1.DashboardModule,
            chat_ai_module_1.ChatAiModule,
            gateway_module_1.GatewayModule,
            vector_store_module_1.VectorStoreModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            notifications_gateway_1.NotificationsGateway,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            vector_store_service_1.VectorStoreService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map