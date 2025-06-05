"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVectorStoreDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_vector_store_dto_1 = require("./create-vector-store.dto");
class UpdateVectorStoreDto extends (0, swagger_1.PartialType)(create_vector_store_dto_1.CreateVectorStoreDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateVectorStoreDto = UpdateVectorStoreDto;
//# sourceMappingURL=update-vector-store.dto.js.map