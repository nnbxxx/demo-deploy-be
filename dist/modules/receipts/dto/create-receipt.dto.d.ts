import { PAYMENT_METHOD } from "src/constants/schema.enum";
export declare class ReceiptDetailDTo {
    product: string;
    color: string;
    size: string;
    material: string;
    price: number;
    quantity: number;
}
export declare class CreateReceiptDto {
    items: ReceiptDetailDTo[];
    coupons: string[];
    supplier: string;
    notes: string;
    address: string;
    paymentMethod: PAYMENT_METHOD;
}
