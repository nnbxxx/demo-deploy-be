import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IUser } from '../users/users.interface';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/product.schemas").Product> & import("./schemas/product.schemas").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/product.schemas").Product> & import("./schemas/product.schemas").Product & {
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
        result: any;
    }>;
    findOne(id: string): Promise<{
        product: {
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
            name: string;
            category: import("mongoose").Schema.Types.ObjectId;
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
            isDeleted: boolean;
            deletedAt: Date;
            __v?: number;
        };
        quantityComments: number;
        inventory: {
            productInventory: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct> & import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v?: number;
            }> & import("mongoose").Document<unknown, {}, import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct> & import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v?: number;
            } & Required<{
                _id: import("mongoose").Types.ObjectId;
            }>;
        };
    }>;
    findOneForUser(id: string, user: IUser): Promise<{
        product: {
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
            name: string;
            category: import("mongoose").Schema.Types.ObjectId;
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
            isDeleted: boolean;
            deletedAt: Date;
            __v?: number;
        };
        quantityComments: number;
        inventory: {
            productInventory: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct> & import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v?: number;
            }> & import("mongoose").Document<unknown, {}, import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct> & import("../inventory-product/schemas/inventory-product.schemas").InventoryProduct & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v?: number;
            } & Required<{
                _id: import("mongoose").Types.ObjectId;
            }>;
        };
    }>;
    findImages(id: string): Promise<string[]>;
    findProductsRecentViewForUser(user: IUser): Promise<any>;
    findProductsPurchasedForUser(user: IUser): Promise<any>;
    update(updateProductDto: UpdateProductDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/product.schemas").Product> & import("./schemas/product.schemas").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/product.schemas").Product> & import("./schemas/product.schemas").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}
