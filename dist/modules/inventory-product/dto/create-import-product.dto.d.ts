declare class ImportVariantDto {
    color?: string;
    size?: string;
    material?: string;
    quantity: number;
    importPrice: number;
    exportPrice: number;
    discount: number;
    sellPrice: number;
}
export declare class ImportStockDto {
    productId: string;
    variants: ImportVariantDto[];
}
export {};
