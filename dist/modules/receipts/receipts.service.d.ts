import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto, UpdateStatusDto } from './dto/update-receipt.dto';
import { Receipt, ReceiptDocument } from './schemas/receipt.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { ProductsService } from '../products/products.service';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
import { RECEIPT_STATUS } from 'src/constants/schema.enum';
import { CartsService } from '../carts/carts.service';
import { UsersService } from '../users/users.service';
import { InventoryProductService } from '../inventory-product/inventory-product.service';
import { CouponsService } from '../coupons/coupons.service';
import { CheckValidCoupon } from '../coupons/dto/create-coupon.dto';
import { PaymentUrlDto } from './dto/payment-url.dto';
import { AddressUserService } from '../address-user/address-user.service';
import { CouponDocument } from '../coupons/schemas/coupon.schemas';
export declare class ReceiptsService {
    private receiptModel;
    private productService;
    private cartService;
    private userService;
    private inventoryProductService;
    private couponService;
    private addressUserService;
    private couponModel;
    private vnpay;
    constructor(receiptModel: SoftDeleteModel<ReceiptDocument>, productService: ProductsService, cartService: CartsService, userService: UsersService, inventoryProductService: InventoryProductService, couponService: CouponsService, addressUserService: AddressUserService, couponModel: SoftDeleteModel<CouponDocument>);
    create(createReceiptDto: CreateReceiptDto, user: IUser): Promise<string | (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)>;
    validate(createReceiptDto: CreateReceiptDto): Promise<void>;
    calcTotal(receiptId: string, isActive?: boolean): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    autoconfirm(): Promise<{
        quantityConfirmReceipts: number;
    }>;
    confirmReceipt(receiptId: mongoose.Types.ObjectId): Promise<boolean>;
    findAll(currentPage: number, limit: number, qs: string, user?: IUser): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(receiptId: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    getDashboard(): Promise<{}>;
    updateForUser(updateReceiptDto: UpdateReceiptDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    updateStatus(updateStatusDto: UpdateStatusDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    removeForUser(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
    confirmPayment(receiptId: string, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    activeCoupons(checkValidCoupon: CheckValidCoupon, receiptId: string, user: IUser, active?: boolean): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findByStatus(user: IUser, statusUser: RECEIPT_STATUS, statusSupplier: RECEIPT_STATUS): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    getCashFlow(user: IUser): Promise<{
        totalConfirmReceipt: number;
        totalOnDeliveryReceipt: number;
        totalDeliveredReceipt: number;
    }>;
    returnReceipt(receiptId: string, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    generatePaymentUrl(paymentUrlDto: PaymentUrlDto): Promise<string>;
    validatePaymentCallback(query: any): import("vnpay").VerifyReturnUrl;
    confirmPaid(orderId: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Receipt> & Receipt & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
}
