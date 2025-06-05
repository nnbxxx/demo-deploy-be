import { CheckValidCoupon, CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon, CouponDocument } from './schemas/coupon.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
import { UsersService } from '../users/users.service';
import { NotificationsGateway } from 'src/notifications/notifications.gateway';
import { NotificationsService } from 'src/notifications/notifications.service';
export declare class CouponsService {
    private couponModel;
    private userService;
    private notificationsGateway;
    private notificationsService;
    constructor(couponModel: SoftDeleteModel<CouponDocument>, userService: UsersService, notificationsGateway: NotificationsGateway, notificationsService: NotificationsService);
    create(createCouponDto: CreateCouponDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Coupon> & Coupon & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Coupon> & Coupon & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Coupon> & Coupon & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Coupon> & Coupon & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Coupon> & Coupon & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Coupon> & Coupon & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(updateCouponDto: UpdateCouponDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
    autoNotificationCoupons(): Promise<void>;
    checkValidCoupon(checkValidCouponDto: CheckValidCoupon, user: IUser, active?: boolean): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Coupon> & Coupon & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Coupon> & Coupon & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
}
