import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose, { Types } from 'mongoose';
import { UsersService } from '../users/users.service';
import { InventoryProductService } from '../inventory-product/inventory-product.service';
import { ReviewsService } from '../reviews/reviews.service';
import { CategoriesService } from '../categories/categories.service';
import { UserDocument } from '../users/schemas/user.schema';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';
import { InventoryProduct, InventoryProductDocument } from '../inventory-product/schemas/inventory-product.schemas';
export declare class ProductsService {
    private inventoryProductModel;
    private productModel;
    private userService;
    private userModel;
    private inventoryProductService;
    private reviewService;
    private categoriesService;
    private notificationsGateway;
    private notificationsService;
    constructor(inventoryProductModel: SoftDeleteModel<InventoryProductDocument>, productModel: SoftDeleteModel<ProductDocument>, userService: UsersService, userModel: SoftDeleteModel<UserDocument>, inventoryProductService: InventoryProductService, reviewService: ReviewsService, categoriesService: CategoriesService, notificationsGateway: NotificationsGateway, notificationsService: NotificationsService);
    create(createProductDto: CreateProductDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    sendNewProductNotification(product: any): Promise<void>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: any;
    }>;
    findOne(id: string): Promise<{
        product: {
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
            name: string;
            category: mongoose.Schema.Types.ObjectId;
            brand: string;
            description: string;
            images: string[];
            rating: number;
            tags: string;
            features: string;
            code: string;
            variants: {
                attributes: Record<string, any>;
            }[];
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
            isDeleted: boolean;
            deletedAt: Date;
            __v?: number;
        };
        quantityComments: number;
        inventory: {
            productInventory: mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
                _id: Types.ObjectId;
            } & {
                __v?: number;
            }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
                _id: Types.ObjectId;
            } & {
                __v?: number;
            } & Required<{
                _id: Types.ObjectId;
            }>;
        };
    }>;
    findOneForUser(id: string, user: IUser): Promise<{
        product: {
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
            name: string;
            category: mongoose.Schema.Types.ObjectId;
            brand: string;
            description: string;
            images: string[];
            rating: number;
            tags: string;
            features: string;
            code: string;
            variants: {
                attributes: Record<string, any>;
            }[];
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
            isDeleted: boolean;
            deletedAt: Date;
            __v?: number;
        };
        quantityComments: number;
        inventory: {
            productInventory: mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
                _id: Types.ObjectId;
            } & {
                __v?: number;
            }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
                _id: Types.ObjectId;
            } & {
                __v?: number;
            } & Required<{
                _id: Types.ObjectId;
            }>;
        };
    }>;
    findImages(id: string): Promise<string[]>;
    update(updateProductDto: UpdateProductDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Product> & Product & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
    getProductsRecentViewByUser(user: IUser): Promise<any>;
    getProductsPurchasedByUser(user: IUser): Promise<any>;
    addInforInventoryProduct(products: any): Promise<any>;
}
