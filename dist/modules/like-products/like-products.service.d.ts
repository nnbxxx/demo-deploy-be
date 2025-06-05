import { AddLikeProductDto } from './dto/update-like-product.dto';
import { LikeProduct, LikeProductDocument } from './schemas/like-product.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose, { Types } from 'mongoose';
import { InventoryProductService } from '../inventory-product/inventory-product.service';
import { ProductsService } from '../products/products.service';
export declare class LikeProductsService {
    private likeProductModel;
    private inventoryProductService;
    private productService;
    constructor(likeProductModel: SoftDeleteModel<LikeProductDocument>, inventoryProductService: InventoryProductService, productService: ProductsService);
    create(user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findByUser(user: IUser): Promise<{
        items: any;
        _id: Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: mongoose.Collection;
        db: mongoose.Connection;
        errors?: mongoose.Error.ValidationError;
        id?: any;
        isNew: boolean;
        schema: mongoose.Schema;
        user: mongoose.Schema.Types.ObjectId;
        createdBy: {
            _id: mongoose.Schema.Types.ObjectId;
            email: string;
        };
        updatedBy: {
            _id: mongoose.Schema.Types.ObjectId;
            email: string;
        };
        deletedBy: {
            _id: mongoose.Schema.Types.ObjectId;
            email: string;
        };
        createdAt: Date;
        updatedAt: Date;
        isDeleted: boolean;
        deletedAt: Date;
        __v?: number;
    }>;
    removeProduct(idProduct: string, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    removeAll(user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    addProduct(productLikeItem: AddLikeProductDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, LikeProduct> & LikeProduct & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    checkIsItemExit(productId: mongoose.Types.ObjectId, userProductList: mongoose.Types.ObjectId[]): Promise<boolean>;
    checkProductFavorite(productId: string, user: IUser): Promise<{
        checkProduct: boolean;
    }>;
}
