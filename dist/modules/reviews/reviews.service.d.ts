import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './schemas/review.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
import { ProductDocument } from '../products/schemas/product.schemas';
import { ReceiptDocument } from '../receipts/schemas/receipt.schemas';
export declare class ReviewsService {
    private reviewModel;
    private productModel;
    private receiptModel;
    private userService;
    constructor(reviewModel: SoftDeleteModel<ReviewDocument>, productModel: SoftDeleteModel<ProductDocument>, receiptModel: SoftDeleteModel<ReceiptDocument>, userService: UsersService);
    create(user: IUser, createReviewDto: CreateReviewDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Review> & Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Review> & Review & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    updateProductRating(productId: string): Promise<void>;
    validateReview(userId: string, productId: string): Promise<void>;
    getQuantityComment(productId: string): Promise<number>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Review> & Review & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Review> & Review & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
}
