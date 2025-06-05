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
exports.DashboardController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const create_dashboard_dto_1 = require("./dto/create-dashboard.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../decorator/customize");
const schema_enum_1 = require("../constants/schema.enum");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    findDataWithTime(type = schema_enum_1.TYPE_TIME_FILTER.WEEK) {
        return this.dashboardService.getDashboardCardInfoTime(type);
    }
    findData() {
        return this.dashboardService.getDashboardCardInfo();
    }
    getDataRevenue(dataRevenueDto) {
        return this.dashboardService.getMonthlyTotal(dataRevenueDto.year);
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('/info-time'),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "findDataWithTime", null);
__decorate([
    (0, common_1.Get)('/info'),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "findData", null);
__decorate([
    (0, common_1.Post)('/revenue'),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 201, type: [Object] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dashboard_dto_1.DataRevenueDto]),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "getDataRevenue", null);
exports.DashboardController = DashboardController = __decorate([
    (0, swagger_1.ApiTags)('dashboard'),
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map