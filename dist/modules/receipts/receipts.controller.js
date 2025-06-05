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
exports.ReceiptsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const receipts_service_1 = require("./receipts.service");
const create_receipt_dto_1 = require("./dto/create-receipt.dto");
const update_receipt_dto_1 = require("./dto/update-receipt.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
const schedule_1 = require("@nestjs/schedule");
const create_coupon_dto_1 = require("../coupons/dto/create-coupon.dto");
const payment_url_dto_1 = require("./dto/payment-url.dto");
let ReceiptsController = class ReceiptsController {
    constructor(receiptsService) {
        this.receiptsService = receiptsService;
    }
    create(createReceiptDto, user) {
        return this.receiptsService.create(createReceiptDto, user);
    }
    activeCoupon(checkValidCoupon, id, user) {
        return this.receiptsService.activeCoupons(checkValidCoupon, id, user);
    }
    unactiveCoupon(checkValidCoupon, id, user) {
        return this.receiptsService.activeCoupons(checkValidCoupon, id, user, false);
    }
    findAllByUser(currentPage, limit, qs, user) {
        return this.receiptsService.findAll(currentPage, limit, qs, user);
    }
    findAll(currentPage, limit, qs) {
        return this.receiptsService.findAll(currentPage, limit, qs);
    }
    findOne(id) {
        return this.receiptsService.findOne(id);
    }
    update(updateReceiptDto) {
        return this.receiptsService.updateForUser(updateReceiptDto);
    }
    updateStatus(updateStatusDto) {
        return this.receiptsService.updateStatus(updateStatusDto);
    }
    remove(id, user) {
        return this.receiptsService.removeForUser(id, user);
    }
    autoUpdateConfirm() {
        return this.receiptsService.autoconfirm();
    }
    getDashboard() {
        return this.receiptsService.getDashboard();
    }
    confirmPayment(id, user) {
        return this.receiptsService.confirmPayment(id, user);
    }
    returnReceipt(id, user) {
        return this.receiptsService.returnReceipt(id, user);
    }
    getCashFlow(user) {
        return this.receiptsService.getCashFlow(user);
    }
    async generatePaymentUrl(paymentUrlDto) {
        const result = await this.receiptsService.generatePaymentUrl(paymentUrlDto);
        return { vnpUrl: result };
    }
    async callbackVNPay(query, res) {
        const result = this.receiptsService.validatePaymentCallback(query);
        if (!result.isSuccess) {
            const failUrl = `http://localhost:3000/dashboard/my-orders`;
            return res.redirect(failUrl);
        }
        await this.receiptsService.confirmPaid(result.vnp_TxnRef);
        const succeedUrl = `http://localhost:3000/dashboard/my-orders`;
        return res.redirect(succeedUrl);
    }
};
exports.ReceiptsController = ReceiptsController;
__decorate([
    (0, customize_1.ResponseMessage)("Create new receipt"),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receipt_dto_1.CreateReceiptDto, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "create", null);
__decorate([
    (0, customize_1.ResponseMessage)("active coupon of receipt"),
    (0, common_1.Post)(`coupon/active/:id`),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_dto_1.CheckValidCoupon, String, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "activeCoupon", null);
__decorate([
    (0, customize_1.ResponseMessage)("unactive coupon of receipt"),
    (0, common_1.Post)(`coupon/unactive/:id`),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_dto_1.CheckValidCoupon, String, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "unactiveCoupon", null);
__decorate([
    (0, customize_1.ResponseMessage)("View history receipt"),
    (0, common_1.Get)('/user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __param(3, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "findAllByUser", null);
__decorate([
    (0, customize_1.ResponseMessage)("View all receipt"),
    (0, common_1.Get)('/admin'),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "findAll", null);
__decorate([
    (0, customize_1.ResponseMessage)("View detail receipt"),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "findOne", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update receipt for user"),
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_receipt_dto_1.UpdateReceiptDto]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "update", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update receipt for user"),
    (0, common_1.Patch)('/status'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_receipt_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "remove", null);
__decorate([
    (0, customize_1.ResponseMessage)("auto confirm receipts"),
    (0, common_1.Get)('auto/auto_active'),
    (0, customize_1.Public)(),
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "autoUpdateConfirm", null);
__decorate([
    (0, customize_1.ResponseMessage)("Dashboard receipts"),
    (0, common_1.Get)('/dashboard/dashboard'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "getDashboard", null);
__decorate([
    (0, customize_1.ResponseMessage)("confirmPayment receipts"),
    (0, common_1.Post)('/confirmPayment'),
    (0, swagger_1.ApiBody)({ type: update_receipt_dto_1.IdSW }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "confirmPayment", null);
__decorate([
    (0, customize_1.ResponseMessage)("return receipts"),
    (0, common_1.Post)('/user/return'),
    (0, swagger_1.ApiBody)({ type: update_receipt_dto_1.IdSW }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "returnReceipt", null);
__decorate([
    (0, common_1.Get)('/user/cash-flow'),
    (0, customize_1.ResponseMessage)("Cash flow statistics a User"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReceiptsController.prototype, "getCashFlow", null);
__decorate([
    (0, common_1.Get)("create/payment-url"),
    (0, customize_1.ResponseMessage)("Create payment-url"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_url_dto_1.PaymentUrlDto]),
    __metadata("design:returntype", Promise)
], ReceiptsController.prototype, "generatePaymentUrl", null);
__decorate([
    (0, common_1.Get)("vnpay/callback"),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReceiptsController.prototype, "callbackVNPay", null);
exports.ReceiptsController = ReceiptsController = __decorate([
    (0, swagger_1.ApiTags)('receipts'),
    (0, common_1.Controller)('receipts'),
    __metadata("design:paramtypes", [receipts_service_1.ReceiptsService])
], ReceiptsController);
//# sourceMappingURL=receipts.controller.js.map