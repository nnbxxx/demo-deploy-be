"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayModule = void 0;
const common_1 = require("@nestjs/common");
const app_gateway_1 = require("./app.gateway");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../modules/users/users.module");
const users_service_1 = require("../modules/users/users.service");
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../modules/users/schemas/user.schema");
const role_schemas_1 = require("../modules/roles/schemas/role.schemas");
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: role_schemas_1.Role.name, schema: role_schemas_1.RoleSchema },
            ]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_ACCESS_TOKEN_SECRET'),
                    signOptions: {
                        expiresIn: (0, ms_1.default)(configService.get('JWT_ACCESS_EXPIRE')),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [app_gateway_1.AppGateway, users_service_1.UsersService],
        controllers: [],
        exports: [app_gateway_1.AppGateway],
    })
], GatewayModule);
//# sourceMappingURL=gateway.module.js.map