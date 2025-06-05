"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryProductDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_inventory_product_dto_1 = require("./create-inventory-product.dto");
class UpdateInventoryProductDto extends (0, mapped_types_1.PartialType)(create_inventory_product_dto_1.CreateInventoryProductDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateInventoryProductDto = UpdateInventoryProductDto;
//# sourceMappingURL=update-inventory-product.dto.js.map