import { InventoryProductService } from './inventory-product.service';
import { IUser } from '../users/users.interface';
import { ImportStockDto } from './dto/create-import-product.dto';
export declare class InventoryProductController {
    private readonly inventoryProductService;
    constructor(inventoryProductService: InventoryProductService);
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/inventory-product.schemas").InventoryProduct> & import("./schemas/inventory-product.schemas").InventoryProduct & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/inventory-product.schemas").InventoryProduct> & import("./schemas/inventory-product.schemas").InventoryProduct & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/inventory-product.schemas").InventoryProduct> & import("./schemas/inventory-product.schemas").InventoryProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/inventory-product.schemas").InventoryProduct> & import("./schemas/inventory-product.schemas").InventoryProduct & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    manageStock(importStockDto: ImportStockDto, user: IUser): Promise<{
        message: string;
        totalAdded: number;
    }>;
}
