import { LikeProductsService } from './like-products.service';
import { AddLikeProductDto } from './dto/update-like-product.dto';
import { IUser } from '../users/users.interface';
export declare class LikeProductsController {
    private readonly likeProductsService;
    constructor(likeProductsService: LikeProductsService);
    create(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getCartByUser(user: IUser): Promise<{
        items: any;
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema;
        user: import("mongoose").Schema.Types.ObjectId;
        createdBy: {
            _id: import("mongoose").Schema.Types.ObjectId;
            email: string;
        };
        updatedBy: {
            _id: import("mongoose").Schema.Types.ObjectId;
            email: string;
        };
        deletedBy: {
            _id: import("mongoose").Schema.Types.ObjectId;
            email: string;
        };
        createdAt: Date;
        updatedAt: Date;
        isDeleted: boolean;
        deletedAt: Date;
        __v?: number;
    }>;
    addItem(user: IUser, productLikeItem: AddLikeProductDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    removeCartItem(id: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    checkCartItem(id: string, user: IUser): Promise<{
        checkProduct: boolean;
    }>;
    removeCart(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/like-product.schemas").LikeProduct> & import("./schemas/like-product.schemas").LikeProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
