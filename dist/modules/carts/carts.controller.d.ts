import { CartsService } from './carts.service';
import { CartItem } from './dto/update-cart.dto';
import { IUser } from '../users/users.interface';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    create(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getCartByUser(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    addItem(user: IUser, CartItem: CartItem): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateItem(user: IUser, updateCartDto: CartItem): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    removeCartItem(id: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    removeCart(user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/cart.schemas").Cart> & import("./schemas/cart.schemas").Cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
