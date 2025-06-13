"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProductTool = void 0;
const tools_1 = require("langchain/tools");
const zod_1 = require("zod");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schemas_1 = require("../../modules/products/schemas/product.schemas");
const inventory_product_schemas_1 = require("../../modules/inventory-product/schemas/inventory-product.schemas");
let SearchProductTool = class SearchProductTool extends tools_1.DynamicStructuredTool {
    constructor(inventoryModel, productModel) {
        super({
            name: 'search_product_tool',
            description: 'Tìm sản phẩm theo thuộc tính kho (màu, size, giá) và thông tin mô tả (tên, thương hiệu, mô tả)',
            schema: zod_1.z.object({
                color: zod_1.z.string().optional().describe('Màu sắc sản phẩm (ví dụ: đỏ -> convert sang mã màu, xanh-> convert sang mã màu , #ff0000, ...)'),
                size: zod_1.z.string().optional().describe('Kích thước sản phẩm (M, L, XL...)'),
                minPrice: zod_1.z.number().optional().describe('Giá bán tối thiểu'),
                maxPrice: zod_1.z.number().optional().describe('Giá bán tối đa'),
                keyword: zod_1.z.string().optional().describe('Từ khóa tìm kiếm trong tên, mô tả, thương hiệu, ví dụ tìm áo, tìm quần ,....'),
            }),
            func: async (input) => {
                const { color, size, minPrice, maxPrice, keyword } = input;
                let productIds = undefined;
                if (keyword) {
                    const productQuery = {
                        isDeleted: false,
                        $or: [
                            { name: { $regex: keyword, $options: 'i' } },
                            { description: { $regex: keyword, $options: 'i' } },
                            { brand: { $regex: keyword, $options: 'i' } },
                            { tags: { $regex: keyword, $options: 'i' } },
                            { features: { $regex: keyword, $options: 'i' } },
                        ],
                    };
                    const products = await this.productModel.find(productQuery).select('_id').lean();
                    productIds = products.map((p) => p._id.toString());
                    if (productIds.length === 0) {
                        return 'Không tìm thấy sản phẩm nào phù hợp với từ khóa.';
                    }
                }
                const query = {};
                if (productIds) {
                    query.productId = { $in: productIds };
                }
                query.productVariants = {
                    $elemMatch: {
                        ...(color && { 'attributes.color': color }),
                        ...(size && { 'attributes.size': size }),
                        ...(minPrice !== undefined && { sellPrice: { $gte: minPrice } }),
                        ...(maxPrice !== undefined && {
                            sellPrice: {
                                ...(minPrice !== undefined ? { $gte: minPrice } : {}),
                                $lte: maxPrice
                            }
                        }),
                    }
                };
                const results = await this.inventoryModel
                    .find(query)
                    .limit(10)
                    .populate({
                    path: 'productId',
                    select: 'name images brand description category',
                    populate: {
                        path: 'category',
                        select: 'name'
                    }
                })
                    .lean();
                if (results.length === 0)
                    return 'Không tìm thấy sản phẩm nào phù hợp.';
                const formatted = results.map((item, index) => {
                    const product = item.productId;
                    return `${index + 1}. ${product.name} - Thương hiệu: ${product.brand}, Danh mục: ${product.category?.name || 'Không rõ'}\nID: ${product._id}\nMô tả: ${product.description}\nHình ảnh: ${product.images?.[0] || 'Không có'}\n`;
                });
                return `Đã tìm thấy ${formatted.length} sản phẩm:\n\n` + formatted.join('\n');
            }
        });
        this.inventoryModel = inventoryModel;
        this.productModel = productModel;
        this.name = 'search_product_tool';
        this.description = 'Tìm sản phẩm theo màu sắc, size, khoảng giá, hoặc từ khóa mô tả, tên, thương hiệu';
    }
};
exports.SearchProductTool = SearchProductTool;
exports.SearchProductTool = SearchProductTool = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(inventory_product_schemas_1.InventoryProduct.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SearchProductTool);
//# sourceMappingURL=search-product.tool.js.map