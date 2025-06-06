"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_role_dto_1 = require("./create-role.dto");
class UpdateRoleDto extends (0, mapped_types_1.PartialType)(create_role_dto_1.CreateRoleDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateRoleDto = UpdateRoleDto;
//# sourceMappingURL=update-role.dto.js.map