export declare class AttributeDto {
    name: string;
    desc?: string;
}
export declare class VariantDto {
    attributes: Record<string, AttributeDto>;
}
export declare class CreateProductDto {
    name: string;
    category: string;
    brand: string;
    description: string;
    images: string[];
    tags: string;
    code: string;
    features: string[];
    variants?: VariantDto[];
}
