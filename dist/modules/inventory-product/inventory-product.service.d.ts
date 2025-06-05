import { CreateInventoryProductDto } from './dto/create-inventory-product.dto';
import { UpdateInventoryProductDto } from './dto/update-inventory-product.dto';
import { InventoryProduct, InventoryProductDocument } from './schemas/inventory-product.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
import { ReceiptItem } from '../receipts/dto/update-receipt.dto';
import { INVENTORY_ACTION } from 'src/constants/schema.enum';
export declare class InventoryProductService {
    private inventoryProductModel;
    constructor(inventoryProductModel: SoftDeleteModel<InventoryProductDocument>);
    create(createInventoryProductDto: CreateInventoryProductDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findByProductId(productId: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    getProductPurchased(productId: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    updateReceiptUser(receiptItems: ReceiptItem[], user: IUser): Promise<void>;
    getTopProductsWithReservations(): Promise<{
        name: any;
        totalQuantityBought: any;
    }[]>;
    manageStock(productId: string, variants: {
        color?: string;
        size?: string;
        material?: string;
        quantity: number;
        importPrice: number;
        exportPrice?: number;
        discount?: number;
        sellPrice?: number;
    }[], user: IUser, type?: INVENTORY_ACTION): Promise<{
        message: string;
        totalAdded: number;
    }>;
    checkProductAvailability(product: {
        _id: string;
        price: number;
        quantity: number;
        color: string;
        size: string;
    }): Promise<boolean>;
    update(updateInventoryProduct: UpdateInventoryProductDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, InventoryProduct> & InventoryProduct & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
}
