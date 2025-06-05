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
exports.AddressSchema = exports.Address = exports.Districts = exports.Wards = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class Wards {
}
exports.Wards = Wards;
class Districts {
}
exports.Districts = Districts;
let Address = class Address {
};
exports.Address = Address;
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "Id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Address.prototype, "Name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        require: true, type: [{
                Id: { type: String },
                Name: { type: String },
                Wards: {
                    type: [{
                            Id: { type: String },
                            Name: { type: String },
                            Level: { type: String },
                        }]
                }
            }]
    }),
    __metadata("design:type", Array)
], Address.prototype, "Districts", void 0);
exports.Address = Address = __decorate([
    (0, mongoose_1.Schema)()
], Address);
exports.AddressSchema = mongoose_1.SchemaFactory.createForClass(Address);
//# sourceMappingURL=addresses.schemas.js.map