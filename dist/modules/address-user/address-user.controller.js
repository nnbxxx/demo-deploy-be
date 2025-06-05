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
exports.AddressUserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const address_user_service_1 = require("./address-user.service");
const create_address_user_dto_1 = require("./dto/create-address-user.dto");
const update_address_user_dto_1 = require("./dto/update-address-user.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
let AddressUserController = class AddressUserController {
    constructor(addressUserService) {
        this.addressUserService = addressUserService;
    }
    create(createAddressUserDto, user) {
        return this.addressUserService.create(createAddressUserDto, user);
    }
    findAll(currentPage, limit, qs) {
        return this.addressUserService.findAll(currentPage, limit, qs);
    }
    findDefaultAddress(user) {
        return this.addressUserService.findDefaultAddress(user);
    }
    findAddressUserById(user, id) {
        return this.addressUserService.findUserAddress(user, id);
    }
    update(updateAddressUserDto, user) {
        return this.addressUserService.update(updateAddressUserDto);
    }
    updateAddressUser(updateAddressUserDto, user) {
        return this.addressUserService.updateUser(updateAddressUserDto, user);
    }
    updateDefaultAddress(user, id) {
        return this.addressUserService.updateDefaultAddressUser(id, user);
    }
    remove(user, id) {
        return this.addressUserService.removeForUser(id, user);
    }
};
exports.AddressUserController = AddressUserController;
__decorate([
    (0, common_1.Post)(),
    (0, customize_1.ResponseMessage)("Create a new user address"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_user_dto_1.CreateAddressUserDto, Object]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "create", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch list address user with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/user/default-address'),
    (0, customize_1.ResponseMessage)("Get default address user"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "findDefaultAddress", null);
__decorate([
    (0, common_1.Get)('/user/:id'),
    (0, customize_1.ResponseMessage)("Get default address user"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "findAddressUserById", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiBody)({ type: update_address_user_dto_1.UpdateAddressUserDtoSWG }),
    (0, customize_1.ResponseMessage)("Update address user "),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_address_user_dto_1.UpdateAddressUserDto, Object]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/user'),
    (0, swagger_1.ApiBody)({ type: update_address_user_dto_1.UpdateAddressUserDtoSWG }),
    (0, customize_1.ResponseMessage)("Update address user "),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_address_user_dto_1.UpdateAddressUserDto, Object]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "updateAddressUser", null);
__decorate([
    (0, common_1.Patch)('/user/default/:id'),
    (0, customize_1.ResponseMessage)("Update address user "),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "updateDefaultAddress", null);
__decorate([
    (0, common_1.Delete)('/user/remove/:id'),
    (0, customize_1.ResponseMessage)("Delete address user for user"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, customize_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AddressUserController.prototype, "remove", null);
exports.AddressUserController = AddressUserController = __decorate([
    (0, swagger_1.ApiTags)('address-user'),
    (0, common_1.Controller)('address-user'),
    __metadata("design:paramtypes", [address_user_service_1.AddressUserService])
], AddressUserController);
//# sourceMappingURL=address-user.controller.js.map