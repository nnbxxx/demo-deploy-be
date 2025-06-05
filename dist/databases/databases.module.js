"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasesModule = void 0;
const common_1 = require("@nestjs/common");
const databases_service_1 = require("./databases.service");
const databases_controller_1 = require("./databases.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../modules/users/schemas/user.schema");
const permission_schemas_1 = require("../modules/permissions/schemas/permission.schemas");
const role_schemas_1 = require("../modules/roles/schemas/role.schemas");
const users_module_1 = require("../modules/users/users.module");
const roles_module_1 = require("../modules/roles/roles.module");
const permissions_module_1 = require("../modules/permissions/permissions.module");
let DatabasesModule = class DatabasesModule {
};
exports.DatabasesModule = DatabasesModule;
exports.DatabasesModule = DatabasesModule = __decorate([
    (0, common_1.Module)({
        controllers: [databases_controller_1.DatabasesController],
        providers: [databases_service_1.DatabasesService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: permission_schemas_1.Permission.name, schema: permission_schemas_1.PermissionSchema },
                { name: role_schemas_1.Role.name, schema: role_schemas_1.RoleSchema },
            ]),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule
        ],
    })
], DatabasesModule);
//# sourceMappingURL=databases.module.js.map