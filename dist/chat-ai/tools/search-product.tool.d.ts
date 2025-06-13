import { DynamicStructuredTool } from 'langchain/tools';
import { Model } from 'mongoose';
import { Product } from 'src/modules/products/schemas/product.schemas';
import { InventoryProduct } from 'src/modules/inventory-product/schemas/inventory-product.schemas';
export declare class SearchProductTool extends DynamicStructuredTool {
    private readonly inventoryModel;
    private readonly productModel;
    name: string;
    description: string;
    constructor(inventoryModel: Model<InventoryProduct>, productModel: Model<Product>);
}
