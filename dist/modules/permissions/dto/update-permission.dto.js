"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermissionDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_permission_dto_1 = require("./create-permission.dto");
class UpdatePermissionDto extends (0, mapped_types_1.PartialType)(create_permission_dto_1.CreatePermissionDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePermissionDto = UpdatePermissionDto;
//# sourceMappingURL=update-permission.dto.js.map