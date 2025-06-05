"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const reviews_service_1 = require("./reviews.service");
const reviews_controller_1 = require("./reviews.controller");
const mongoose_1 = require("@nestjs/mongoose");
const review_schemas_1 = require("./schemas/review.schemas");
const users_module_1 = require("../users/users.module");
const product_schemas_1 = require("../products/schemas/product.schemas");
const receipts_module_1 = require("../receipts/receipts.module");
const receipt_schemas_1 = require("../receipts/schemas/receipt.schemas");
let ReviewsModule = class ReviewsModule {
};
exports.ReviewsModule = ReviewsModule;
exports.ReviewsModule = ReviewsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: review_schemas_1.Review.name, schema: review_schemas_1.ReviewSchema },
                { name: product_schemas_1.Product.name, schema: product_schemas_1.ProductSchema },
                { name: receipt_schemas_1.Receipt.name, schema: receipt_schemas_1.ReceiptSchema },
            ]), users_module_1.UsersModule,
            (0, common_1.forwardRef)(() => receipts_module_1.ReceiptsModule),
        ],
        controllers: [reviews_controller_1.ReviewsController],
        providers: [reviews_service_1.ReviewsService],
        exports: [reviews_service_1.ReviewsService]
    })
], ReviewsModule);
//# sourceMappingURL=reviews.module.js.map