import { CartItem } from './dto/update-cart.dto';
import { IUser } from '../users/users.interface';
import { Cart, CartDocument } from './schemas/cart.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import mongoose, { Types } from 'mongoose';
import { InventoryProductService } from '../inventory-product/inventory-product.service';
export declare class CartsService {
    private cartModel;
    private inventoryProductService;
    constructor(cartModel: SoftDeleteModel<CartDocument>, inventoryProductService: InventoryProductService);
    create(user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findByUser(user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    removeProductToCart(idProduct: string, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    removeAllCartItem(user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    addProductToCart(cartItem: CartItem, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    checkIsItemExit(cartItem: CartItem, userProductCart: any): Promise<boolean>;
    calcTotal(cartId: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Cart> & Cart & {
        _id: Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
}
