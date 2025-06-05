export declare class CouponPrice {
    value: number;
    pointAccept: number;
}
export declare class CouponDiscount {
    value: number;
    maxDiscount: number;
    pointAccept: number;
}
export declare class CreateCouponDto {
    code: string;
    name: string;
    type: string;
    quantity: number;
    couponExpired: string;
    description: CouponPrice | CouponDiscount;
}
export declare class CheckValidCoupon {
    code: string;
}
