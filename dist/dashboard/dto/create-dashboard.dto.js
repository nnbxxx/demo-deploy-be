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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRevenueDto = exports.CreateDashboardDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDashboardDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateDashboardDto = CreateDashboardDto;
class DataRevenueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { year: { required: true, type: () => Number } };
    }
}
exports.DataRevenueDto = DataRevenueDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "year không được để trống" }),
    (0, class_validator_1.IsNumber)({}, { message: 'year phải là số nguyên', }),
    __metadata("design:type", Number)
], DataRevenueDto.prototype, "year", void 0);
//# sourceMappingURL=create-dashboard.dto.js.map