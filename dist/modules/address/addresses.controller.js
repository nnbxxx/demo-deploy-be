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
exports.AddressController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const addresses_service_1 = require("./addresses.service");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    findProvince() {
        return this.addressService.getProvince();
    }
    findDistricts(idProvince) {
        return this.addressService.getDistrictsByCityId(idProvince);
    }
    findWards(provinceId, districtId) {
        return this.addressService.getWardByCityId(provinceId, districtId);
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.Get)('/province'),
    (0, customize_1.ResponseMessage)("Fetch Province "),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findProvince", null);
__decorate([
    (0, common_1.Get)('/district'),
    (0, customize_1.ResponseMessage)("Fetch Districts by province"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('idProvince')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findDistricts", null);
__decorate([
    (0, common_1.Get)('/ward'),
    (0, customize_1.ResponseMessage)("Fetch Ward by Districts"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('provinceId')),
    __param(1, (0, common_1.Query)('districtId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findWards", null);
exports.AddressController = AddressController = __decorate([
    (0, swagger_1.ApiTags)('address'),
    (0, common_1.Controller)('address'),
    (0, customize_1.Public)(),
    __metadata("design:paramtypes", [addresses_service_1.AddressService])
], AddressController);
//# sourceMappingURL=addresses.controller.js.map