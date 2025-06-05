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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const coupon_schemas_1 = require("./schemas/coupon.schemas");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_2 = __importDefault(require("mongoose"));
const dayjs_1 = __importDefault(require("dayjs"));
const users_service_1 = require("../users/users.service");
const notifications_gateway_1 = require("../../notifications/notifications.gateway");
const notifications_service_1 = require("../../notifications/notifications.service");
let CouponsService = class CouponsService {
    constructor(couponModel, userService, notificationsGateway, notificationsService) {
        this.couponModel = couponModel;
        this.userService = userService;
        this.notificationsGateway = notificationsGateway;
        this.notificationsService = notificationsService;
    }
    async create(createCouponDto, user) {
        const existingCoupon = await this.couponModel.findOne({ code: createCouponDto.code });
        if (existingCoupon) {
            throw new common_1.ConflictException('Coupon code must be unique');
        }
        return this.couponModel.create({
            ...createCouponDto,
            couponExpired: (0, dayjs_1.default)(createCouponDto.couponExpired).toDate(),
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.couponModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.couponModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select([''])
            .populate(population)
            .exec();
        return {
            meta: {
                current: currentPage,
                pageSize: limit,
                pages: totalPages,
                total: totalItems
            },
            result
        };
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found coupon with id=${id}`);
        }
        return await this.couponModel.findById(id);
    }
    async update(updateCouponDto, user) {
        return await this.couponModel.updateOne({ _id: updateCouponDto._id }, {
            ...updateCouponDto,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
        });
    }
    async remove(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found coupon with id=${id}`);
        }
        await this.couponModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        return this.couponModel.softDelete({ _id: id });
    }
    async autoNotificationCoupons() {
        const coupons = await this.couponModel
            .find({
            isActive: true,
            isDeleted: false,
            quantity: { $gte: 1 },
            couponExpired: { $gte: (0, dayjs_1.default)().toDate() },
        })
            .select({ _id: 1, code: 1, description: 1, name: 1, couponExpired: 1 })
            .exec();
        coupons.forEach(async (coupon) => {
            const { pointAccept } = coupon.description;
            const { _id, code, name, couponExpired } = coupon;
            const listUser = await this.userService.getAllUserAcceptPoint(pointAccept, _id);
            listUser.forEach(async (user) => {
                this.userService.updateUserNewCoupons(user._id, { _id, code, name, couponExpired });
                this.notificationsService.create({
                    message: `${name}`,
                    title: `Bạn vừa nhận được mã khuyến mãi mới: ${code}`,
                    userId: user._id,
                    navigate: 'https://www.google.com/'
                });
                const connectSocketId = await this.userService.checkConnectSocketIo(user._id);
                if (connectSocketId !== null) {
                    this.notificationsGateway.sendNotification({
                        message: `${name}`,
                        title: `Bạn vừa nhận được mã khuyến mãi mới: ${code}`,
                        userId: user._id
                    }, connectSocketId);
                }
            });
        });
    }
    async checkValidCoupon(checkValidCouponDto, user, active = true) {
        const { code } = checkValidCouponDto;
        const codeCheck = await this.couponModel.findOne({ code: code });
        if (codeCheck.quantity === 0) {
            throw new common_1.BadRequestException(`Coupon có mã code ${code} hết hiệu lực`);
        }
        if (codeCheck) {
            codeCheck.quantity += active ? -1 : 1;
            await this.userService.checkIsActiveCode(user._id, codeCheck._id, active);
            await codeCheck.save();
            return codeCheck;
        }
        else {
            throw new common_1.NotFoundException(`Not found Coupon with code = ${code}`);
        }
    }
};
exports.CouponsService = CouponsService;
exports.CouponsService = CouponsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(coupon_schemas_1.Coupon.name)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        notifications_gateway_1.NotificationsGateway,
        notifications_service_1.NotificationsService])
], CouponsService);
//# sourceMappingURL=coupons.service.js.map