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
exports.CouponsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const coupons_service_1 = require("./coupons.service");
const create_coupon_dto_1 = require("./dto/create-coupon.dto");
const update_coupon_dto_1 = require("./dto/update-coupon.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
const schedule_1 = require("@nestjs/schedule");
let CouponsController = class CouponsController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    create(createCouponDto, user) {
        return this.couponsService.create(createCouponDto, user);
    }
    findAll(currentPage, limit, qs) {
        return this.couponsService.findAll(currentPage, limit, qs);
    }
    findOne(id) {
        return this.couponsService.findOne(id);
    }
    update(updateCouponDto, user) {
        return this.couponsService.update(updateCouponDto, user);
    }
    remove(id, user) {
        return this.couponsService.remove(id, user);
    }
    autoSendNotificationCouponsToUser() {
        return this.couponsService.autoNotificationCoupons();
    }
};
exports.CouponsController = CouponsController;
__decorate([
    (0, customize_1.ResponseMessage)("Create a new coupon"),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_dto_1.CreateCouponDto, Object]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch Coupons with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, customize_1.ResponseMessage)("Fetch Coupons by id "),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "findOne", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a Coupons"),
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_coupon_dto_1.UpdateCouponDto, Object]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "update", null);
__decorate([
    (0, customize_1.ResponseMessage)("Delete a Coupons"),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "remove", null);
__decorate([
    (0, customize_1.ResponseMessage)("auto send notification accept coupons to user"),
    (0, common_1.Get)('/user/auto_notification_coupons'),
    (0, customize_1.Public)(),
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "autoSendNotificationCouponsToUser", null);
exports.CouponsController = CouponsController = __decorate([
    (0, swagger_1.ApiTags)('coupons'),
    (0, common_1.Controller)('coupons'),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], CouponsController);
//# sourceMappingURL=coupons.controller.js.map