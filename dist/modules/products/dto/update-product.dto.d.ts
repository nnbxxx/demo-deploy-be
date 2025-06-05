import { VariantDto } from './create-product.dto';
export declare class UpdateProductDto {
    _id: string;
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
