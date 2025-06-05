import { ReceiptDetailDTo } from './create-receipt.dto';
export declare class UpdateStatusDto {
    _id: string;
    statusSupplier: string;
}
export declare class UpdateReceiptDto {
    _id: string;
    items: ReceiptDetailDTo[];
    supplier: string;
    notes: string;
    statusUser: string;
    statusSupplier: string;
    address: {
        province: string;
        district: string;
        ward: string;
        detail: string;
    };
}
export declare class ReceiptAdd {
    _id: string;
    color: string;
    size: string;
    name: string;
    price: number;
    quantity: number;
}
export declare class ReceiptItem {
    product: {
        _id: string;
        name: string;
        price: number;
        quantity: number;
        color: string;
        size: string;
    };
}
export declare class AddressReceipt {
    province: string;
    district: string;
    ward: string;
    detail: string;
}
export declare class IdSW {
    id: string;
}
