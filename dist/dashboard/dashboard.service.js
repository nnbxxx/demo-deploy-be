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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schemas_1 = require("../modules/blog/schemas/blog.schemas");
const user_schema_1 = require("../modules/users/schemas/user.schema");
const receipt_schemas_1 = require("../modules/receipts/schemas/receipt.schemas");
const schema_enum_1 = require("../constants/schema.enum");
const inventory_product_service_1 = require("../modules/inventory-product/inventory-product.service");
const brand_schemas_1 = require("../brand/schemas/brand.schemas");
const util_1 = require("../util/util");
const inventory_product_schemas_1 = require("../modules/inventory-product/schemas/inventory-product.schemas");
const like_product_schemas_1 = require("../modules/like-products/schemas/like-product.schemas");
let DashboardService = class DashboardService {
    constructor(blogModel, userModel, receiptModel, brandModel, inventoryProductModel, likeProductModel, inventoryProductService) {
        this.blogModel = blogModel;
        this.userModel = userModel;
        this.receiptModel = receiptModel;
        this.brandModel = brandModel;
        this.inventoryProductModel = inventoryProductModel;
        this.likeProductModel = likeProductModel;
        this.inventoryProductService = inventoryProductService;
    }
    async getDashboardCardInfoTime(time) {
        const inforBlog = await this.countBlogsCreatedInTimeRange(time);
        const inforUser = await this.countUsersCreatedInTimeRange(time);
        const inforProductExport = await this.countProductDeliveredInTimeRange(time);
        const inforProductImport = await this.countProductImportInTimeRange(time);
        const inforRevenue = await this.countRevenueInTimeRange(time);
        return {
            inforUser, inforBlog, inforProductExport, inforProductImport, inforRevenue,
        };
    }
    async getDashboardCardInfo() {
        const inforInventoryProduct = await this.getTotalInventorySummary();
        const inforUsersAndBuyers = await this.countUsersAndBuyers();
        const dataTopBuyers = await this.getTopUsersByDistinctProducts();
        const inforInventorySumary = await this.getInventorySummary();
        const dataTopSellingProduct = await this.getTopSellingProducts();
        const dataTopLikeProduct = await this.getTopLikedProducts();
        const dataTopViewProduct = await this.getTopViewedProducts();
        return {
            inforInventoryProduct, inforUsersAndBuyers, dataTopBuyers, inforInventorySumary, dataTopSellingProduct, dataTopLikeProduct, dataTopViewProduct
        };
    }
    async countUsersCreatedInTimeRange(type) {
        const { from, to } = (0, util_1.getTimeRangeFromDate)(type);
        const [fromCount, toCount] = await Promise.all([
            this.userModel.countDocuments({ createdAt: { $lte: from } }).exec(),
            this.userModel.countDocuments({ createdAt: { $lte: to } }).exec(),
        ]);
        return {
            fromCount,
            toCount,
        };
    }
    async countBlogsCreatedInTimeRange(type) {
        const { from, to } = (0, util_1.getTimeRangeFromDate)(type);
        const [fromCount, toCount] = await Promise.all([
            this.blogModel.countDocuments({ createdAt: { $lte: from } }).exec(),
            this.blogModel.countDocuments({ createdAt: { $lte: to } }).exec(),
        ]);
        return {
            fromCount,
            toCount,
        };
    }
    async countProductDeliveredInTimeRange(type) {
        const { from: from1, to: to1 } = (0, util_1.getTimeRangeFromDate)(type);
        const { from: from2, to: to2 } = (0, util_1.getTimeRangeFromDate)(type, from1);
        const [fromCount, toCount] = await Promise.all([
            this.getTotalQuantityDelivered(from2, to2),
            this.getTotalQuantityDelivered(from1, to1),
        ]);
        return {
            fromCount,
            toCount,
        };
    }
    async countProductImportInTimeRange(type) {
        const { from: from1, to: to1 } = (0, util_1.getTimeRangeFromDate)(type);
        const { from: from2, to: to2 } = (0, util_1.getTimeRangeFromDate)(type, from1);
        const [fromCount, toCount] = await Promise.all([
            this.getTotalImportAmount(from2, to2),
            this.getTotalImportAmount(from1, to1),
        ]);
        return {
            fromCount,
            toCount,
        };
    }
    async countRevenueInTimeRange(type) {
        const { from: from1, to: to1 } = (0, util_1.getTimeRangeFromDate)(type);
        const { from: from2, to: to2 } = (0, util_1.getTimeRangeFromDate)(type, from1);
        const [fromCount, toCount] = await Promise.all([
            this.calculateTotalReceiptAmount(from2, to2),
            this.calculateTotalReceiptAmount(from1, to1),
        ]);
        return {
            fromCount,
            toCount,
        };
    }
    async getTotalQuantityDelivered(from, to) {
        const result = await this.receiptModel.aggregate([
            {
                $match: {
                    statusUser: schema_enum_1.RECEIPT_STATUS.DELIVERED,
                    statusSupplier: schema_enum_1.RECEIPT_STATUS.DELIVERED,
                    createdAt: {
                        $gte: from,
                        $lte: to,
                    },
                },
            },
            {
                $unwind: '$items',
            },
            {
                $group: {
                    _id: null,
                    totalQuantity: { $sum: '$items.quantity' },
                },
            },
        ]).exec();
        return result[0]?.totalQuantity || 0;
    }
    async getTotalInventorySummary() {
        const allInventory = await this.inventoryProductModel.find({ isDeleted: false });
        let totalStock = 0;
        let totalValue = 0;
        for (const inventory of allInventory) {
            for (const variant of inventory.productVariants) {
                const quantity = variant.stock || 0;
                const price = variant.importPrice || 0;
                totalStock += quantity;
                totalValue += quantity * price;
            }
        }
        return {
            totalStock,
            totalValue
        };
    }
    async getTotalImportAmount(startDate, endDate) {
        const inventoryProducts = await this.inventoryProductModel.find({
            stockHistory: {
                $elemMatch: {
                    action: schema_enum_1.INVENTORY_ACTION.IMPORT,
                    date: { $gte: startDate, $lte: endDate }
                }
            }
        }).lean();
        let totalImportAmount = 0;
        for (const product of inventoryProducts) {
            for (const history of product.stockHistory) {
                if (history.action === schema_enum_1.INVENTORY_ACTION.IMPORT &&
                    history.date >= startDate &&
                    history.date <= endDate) {
                    totalImportAmount += history.price;
                }
            }
        }
        return totalImportAmount;
    }
    async calculateTotalReceiptAmount(fromDate, toDate) {
        const result = await this.receiptModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(fromDate),
                        $lte: new Date(toDate),
                    },
                    isDeleted: { $ne: true }
                }
            },
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$total' },
                }
            }
        ]);
        return result[0]?.totalAmount || 0;
    }
    async getMonthlyTotal(year) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const startOfYear = new Date(year, 0, 1);
        const endOfYear = new Date(year + 1, 0, 1);
        const receiptPipeline = [
            {
                $match: {
                    statusUser: "DELIVERED",
                    createdAt: { $gte: startOfYear, $lt: endOfYear }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    total: 1
                }
            },
            {
                $group: {
                    _id: "$month",
                    totalAmount: { $sum: "$total" }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ];
        const receiptResult = await this.receiptModel.aggregate(receiptPipeline);
        const monthlyTotals = [];
        for (let month = 0; month < 12; month++) {
            const monthStart = new Date(year, month, 1);
            const monthEnd = new Date(year, month + 1, 1);
            const receiptData = receiptResult.find(r => r._id === month + 1);
            const totalSales = receiptData ? receiptData.totalAmount : 0;
            const inventoryProducts = await this.inventoryProductModel.find({
                stockHistory: {
                    $elemMatch: {
                        action: schema_enum_1.INVENTORY_ACTION.IMPORT,
                        date: { $gte: monthStart, $lt: monthEnd }
                    }
                }
            }).lean();
            let totalImportAmount = 0;
            for (const product of inventoryProducts) {
                for (const history of product.stockHistory) {
                    if (history.action === schema_enum_1.INVENTORY_ACTION.IMPORT &&
                        history.date >= monthStart &&
                        history.date < monthEnd) {
                        totalImportAmount += history.price;
                    }
                }
            }
            monthlyTotals.push({
                month: monthNames[month],
                sales: totalSales,
                import: totalImportAmount
            });
        }
        return monthlyTotals;
    }
    async countUsersAndBuyers() {
        const totalUsers = await this.userModel.countDocuments({});
        const buyers = await this.userModel.countDocuments({
            purchasedProducts: { $exists: true, $not: { $size: 0 } },
        });
        return { totalUsers, buyers };
    }
    async getTopUsersByDistinctProducts(limit = 20) {
        return this.userModel.aggregate([
            {
                $project: {
                    userId: { $toString: "$_id" },
                    name: 1,
                    avatar: 1,
                    totalItems: {
                        $size: {
                            $ifNull: [
                                {
                                    $setUnion: [
                                        {
                                            $map: {
                                                input: "$purchasedProducts",
                                                as: "item",
                                                in: "$$item.productId"
                                            }
                                        }
                                    ]
                                },
                                []
                            ]
                        }
                    }
                }
            },
            {
                $sort: { totalItems: -1 }
            },
            {
                $limit: limit
            }
        ]);
    }
    async getInventorySummary() {
        const result = await this.inventoryProductModel.aggregate([
            {
                $facet: {
                    totalProducts: [
                        { $match: { isDeleted: false } },
                        { $count: "count" }
                    ],
                    soldAtLeastOne: [
                        { $match: { isDeleted: false, totalQuantitySell: { $gt: 0 } } },
                        { $count: "count" }
                    ]
                }
            },
            {
                $project: {
                    totalProducts: { $arrayElemAt: ["$totalProducts.count", 0] },
                    soldAtLeastOne: { $arrayElemAt: ["$soldAtLeastOne.count", 0] }
                }
            }
        ]);
        return result[0] || { totalProducts: 0, soldAtLeastOne: 0 };
    }
    async getTopSellingProducts(limit = 20) {
        const result = await this.inventoryProductModel.aggregate([
            {
                $match: {
                    isDeleted: false,
                    totalQuantitySell: { $gt: 0 }
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productInfo"
                }
            },
            { $unwind: "$productInfo" },
            {
                $project: {
                    _id: 0,
                    name: "$productInfo.name",
                    totalSold: "$totalQuantitySell",
                    image: { $arrayElemAt: ["$productInfo.images", 0] }
                }
            },
            { $sort: { totalSold: -1 } },
            { $limit: limit }
        ]);
        return result;
    }
    async getTopLikedProducts(limit = 20) {
        const topLiked = await this.likeProductModel.aggregate([
            { $unwind: '$items' },
            { $group: { _id: '$items', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: limit },
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'product',
                },
            },
            { $unwind: '$product' },
            {
                $project: {
                    name: '$product.name',
                    image: { $arrayElemAt: ["$product.images", 0] },
                    totalLike: '$count',
                },
            },
        ]);
        return topLiked;
    }
    async getTopViewedProducts() {
        const result = await this.userModel.aggregate([
            { $unwind: '$recentViewProducts' },
            {
                $group: {
                    _id: '$recentViewProducts.productId',
                    viewCount: { $sum: 1 },
                },
            },
            { $sort: { viewCount: -1 } },
            { $limit: 20 },
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'productInfo',
                },
            },
            { $unwind: '$productInfo' },
            {
                $project: {
                    _id: 0,
                    productId: '$_id',
                    name: '$productInfo.name',
                    totalLike: '$productInfo.totalLike',
                    image: { $arrayElemAt: ["$productInfo.images", 0] },
                    viewCount: 1,
                },
            },
        ]);
        return result;
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_schemas_1.Blog.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(receipt_schemas_1.Receipt.name)),
    __param(3, (0, mongoose_1.InjectModel)(brand_schemas_1.Brand.name)),
    __param(4, (0, mongoose_1.InjectModel)(inventory_product_schemas_1.InventoryProduct.name)),
    __param(5, (0, mongoose_1.InjectModel)(like_product_schemas_1.LikeProduct.name)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, inventory_product_service_1.InventoryProductService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map