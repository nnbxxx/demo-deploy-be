import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { IUser } from '../users/users.interface';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/review.schemas").Review> & import("./schemas/review.schemas").Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/review.schemas").Review> & import("./schemas/review.schemas").Review & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/review.schemas").Review> & import("./schemas/review.schemas").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/review.schemas").Review> & import("./schemas/review.schemas").Review & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
}
