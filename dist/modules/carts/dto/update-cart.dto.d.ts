export declare class CartItem {
    product: {
        _id: string;
        price: number;
        quantity: number;
        color: string;
        size: string;
    };
}
declare const UpdateToCartDto_base: import("@nestjs/mapped-types").MappedType<Partial<CartItem>>;
export declare class UpdateToCartDto extends UpdateToCartDto_base {
}
export {};
