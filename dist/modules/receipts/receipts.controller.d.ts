import { ReceiptsService } from './receipts.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto, UpdateStatusDto } from './dto/update-receipt.dto';
import { IUser } from '../users/users.interface';
import { CheckValidCoupon } from '../coupons/dto/create-coupon.dto';
import { PaymentUrlDto } from './dto/payment-url.dto';
export declare class ReceiptsController {
    private readonly receiptsService;
    constructor(receiptsService: ReceiptsService);
    create(createReceiptDto: CreateReceiptDto, user: IUser): Promise<string | (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)>;
    activeCoupon(checkValidCoupon: CheckValidCoupon, id: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    unactiveCoupon(checkValidCoupon: CheckValidCoupon, id: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAllByUser(currentPage: number, limit: number, qs: string, user: IUser): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(updateReceiptDto: UpdateReceiptDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateStatus(updateStatusDto: UpdateStatusDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
    autoUpdateConfirm(): Promise<{
        quantityConfirmReceipts: number;
    }>;
    getDashboard(): Promise<{}>;
    confirmPayment(id: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    returnReceipt(id: string, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/receipt.schemas").Receipt> & import("./schemas/receipt.schemas").Receipt & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getCashFlow(user: IUser): Promise<{
        totalConfirmReceipt: number;
        totalOnDeliveryReceipt: number;
        totalDeliveredReceipt: number;
    }>;
    generatePaymentUrl(paymentUrlDto: PaymentUrlDto): Promise<{
        vnpUrl: string;
    }>;
    callbackVNPay(query: any, res: any): Promise<any>;
}
