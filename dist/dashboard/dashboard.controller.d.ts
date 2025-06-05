import { DashboardService } from './dashboard.service';
import { DataRevenueDto } from './dto/create-dashboard.dto';
import { TYPE_TIME_FILTER } from 'src/constants/schema.enum';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    findDataWithTime(type?: TYPE_TIME_FILTER): Promise<{
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
    findData(): Promise<{
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
    getDataRevenue(dataRevenueDto: DataRevenueDto): Promise<any[]>;
}
