"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUserModule = void 0;
const common_1 = require("@nestjs/common");
const address_user_service_1 = require("./address-user.service");
const address_user_controller_1 = require("./address-user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const address_user_schemas_1 = require("./schemas/address-user.schemas");
let AddressUserModule = class AddressUserModule {
};
exports.AddressUserModule = AddressUserModule;
exports.AddressUserModule = AddressUserModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: address_user_schemas_1.AddressUser.name, schema: address_user_schemas_1.AddressUserSchema }])],
        controllers: [address_user_controller_1.AddressUserController],
        providers: [address_user_service_1.AddressUserService],
        exports: [address_user_service_1.AddressUserService]
    })
], AddressUserModule);
//# sourceMappingURL=address-user.module.js.map