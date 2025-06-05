import { BlogDocument } from 'src/modules/blog/schemas/blog.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { UserDocument } from 'src/modules/users/schemas/user.schema';
import { ReceiptDocument } from 'src/modules/receipts/schemas/receipt.schemas';
import { TYPE_TIME_FILTER } from 'src/constants/schema.enum';
import { InventoryProductService } from 'src/modules/inventory-product/inventory-product.service';
import { BrandDocument } from 'src/brand/schemas/brand.schemas';
import { InventoryProductDocument } from 'src/modules/inventory-product/schemas/inventory-product.schemas';
import { LikeProductDocument } from 'src/modules/like-products/schemas/like-product.schemas';
export declare class DashboardService {
    private blogModel;
    private userModel;
    private receiptModel;
    private brandModel;
    private inventoryProductModel;
    private likeProductModel;
    private inventoryProductService;
    constructor(blogModel: SoftDeleteModel<BlogDocument>, userModel: SoftDeleteModel<UserDocument>, receiptModel: SoftDeleteModel<ReceiptDocument>, brandModel: SoftDeleteModel<BrandDocument>, inventoryProductModel: SoftDeleteModel<InventoryProductDocument>, likeProductModel: SoftDeleteModel<LikeProductDocument>, inventoryProductService: InventoryProductService);
    getDashboardCardInfoTime(time: TYPE_TIME_FILTER): Promise<{
        inforUser: {
            fromCount: number;
            toCount: number;
        };
        inforBlog: {
            fromCount: number;
            toCount: number;
        };
        inforProductExport: {
            fromCount: number;
            toCount: number;
        };
        inforProductImport: {
            fromCount: number;
            toCount: number;
        };
        inforRevenue: {
            fromCount: number;
            toCount: number;
        };
    }>;
    getDashboardCardInfo(): Promise<{
        inforInventoryProduct: {
            totalStock: number;
            totalValue: number;
        };
        inforUsersAndBuyers: {
            totalUsers: number;
            buyers: number;
        };
        dataTopBuyers: {
            userId: string;
            name: string;
            avatar: string;
            totalItems: number;
        }[];
        inforInventorySumary: any;
        dataTopSellingProduct: any[];
        dataTopLikeProduct: any[];
        dataTopViewProduct: any[];
    }>;
    countUsersCreatedInTimeRange(type: TYPE_TIME_FILTER): Promise<{
        fromCount: number;
        toCount: number;
    }>;
    countBlogsCreatedInTimeRange(type: TYPE_TIME_FILTER): Promise<{
        fromCount: number;
        toCount: number;
    }>;
    countProductDeliveredInTimeRange(type: TYPE_TIME_FILTER): Promise<{
        fromCount: number;
        toCount: number;
    }>;
    countProductImportInTimeRange(type: TYPE_TIME_FILTER): Promise<{
        fromCount: number;
        toCount: number;
    }>;
    countRevenueInTimeRange(type: TYPE_TIME_FILTER): Promise<{
        fromCount: number;
        toCount: number;
    }>;
    getTotalQuantityDelivered(from: Date, to: Date): Promise<number>;
    getTotalInventorySummary(): Promise<{
        totalStock: number;
        totalValue: number;
    }>;
    getTotalImportAmount(startDate: Date, endDate: Date): Promise<number>;
    calculateTotalReceiptAmount(fromDate: Date, toDate: Date): Promise<number>;
    getMonthlyTotal(year: number): Promise<any[]>;
    countUsersAndBuyers(): Promise<{
        totalUsers: number;
        buyers: number;
    }>;
    getTopUsersByDistinctProducts(limit?: number): Promise<{
        userId: string;
        name: string;
        avatar: string;
        totalItems: number;
    }[]>;
    getInventorySummary(): Promise<any>;
    getTopSellingProducts(limit?: number): Promise<any[]>;
    getTopLikedProducts(limit?: number): Promise<any[]>;
    getTopViewedProducts(): Promise<any[]>;
}
