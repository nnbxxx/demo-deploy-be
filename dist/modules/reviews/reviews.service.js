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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const review_schemas_1 = require("./schemas/review.schemas");
const users_service_1 = require("../users/users.service");
const mongoose_2 = __importDefault(require("mongoose"));
const api_query_params_1 = __importDefault(require("api-query-params"));
const product_schemas_1 = require("../products/schemas/product.schemas");
const receipt_schemas_1 = require("../receipts/schemas/receipt.schemas");
const schema_enum_1 = require("../../constants/schema.enum");
let ReviewsService = class ReviewsService {
    constructor(reviewModel, productModel, receiptModel, userService) {
        this.reviewModel = reviewModel;
        this.productModel = productModel;
        this.receiptModel = receiptModel;
        this.userService = userService;
    }
    async create(user, createReviewDto) {
        const { comment, productId, rating, userId, fileUrl } = createReviewDto;
        const checkProduct = await this.userService.checkPurchasedProduct(userId, productId);
        if (!checkProduct) {
            throw new common_1.BadRequestException('User has not purchased this product');
        }
        await this.validateReview(user._id, createReviewDto.productId);
        let newReview = await this.reviewModel.create({
            comment, productId, rating, userId, fileUrl,
            createdBy: {
                _id: userId,
                email: user.email
            }
        });
        await this.updateProductRating(productId);
        return newReview;
    }
    async updateProductRating(productId) {
        const ratings = await this.reviewModel.aggregate([
            { $match: { productId: new mongoose_2.default.Types.ObjectId(productId) } },
            { $group: { _id: null, avgRating: { $avg: { $toInt: '$rating' } } } },
        ]);
        const avgRating = ratings.length > 0 ? ratings[0].avgRating : 0;
        await this.productModel.findByIdAndUpdate(productId, { rating: avgRating });
    }
    async validateReview(userId, productId) {
        const existingReviewsCount = await this.reviewModel.countDocuments({
            userId,
            productId,
            isDeleted: false,
        });
        const completedOrdersCount = await this.receiptModel.countDocuments({
            user: userId,
            'items.product': productId,
            statusUser: schema_enum_1.RECEIPT_STATUS.DELIVERED,
            isCheckout: true
        });
        if (existingReviewsCount >= completedOrdersCount && completedOrdersCount != 0 && existingReviewsCount != 0) {
            throw new common_1.BadRequestException(`Bạn đã review đủ số lần tương ứng với các đơn hàng đã hoàn thành. Vui long mua lại sản phẩm để reviews`);
        }
    }
    async getQuantityComment(productId) {
        if (!mongoose_2.default.Types.ObjectId.isValid(productId)) {
            throw new common_1.NotFoundException(`not found review with id=${productId}`);
        }
        return this.reviewModel.countDocuments({ productId }).exec();
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.reviewModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.reviewModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select([''])
            .populate({
            path: 'userId',
            select: 'name avatar',
        })
            .exec();
        return {
            meta: {
                current: currentPage,
                pageSize: limit,
                pages: totalPages,
                total: totalItems
            },
            result
        };
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(review_schemas_1.Review.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __param(2, (0, mongoose_1.InjectModel)(receipt_schemas_1.Receipt.name)),
    __metadata("design:paramtypes", [Object, Object, Object, users_service_1.UsersService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map