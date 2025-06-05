declare class ProductVariantDto {
    color: string;
    size?: string;
    material?: string;
    importPrice: number;
    exportPrice: number;
    stock: number;
    sellPrice: number;
}
export declare class CreateInventoryProductDto {
    productId: string;
    productVariants: ProductVariantDto[];
}
export {};
