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
exports.VectorSchema = exports.VectorDocument = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let VectorDocument = class VectorDocument extends mongoose_2.Document {
};
exports.VectorDocument = VectorDocument;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VectorDocument.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Number], required: true }),
    __metadata("design:type", Array)
], VectorDocument.prototype, "embedding", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            filename: String,
            title: String,
        },
        required: true,
    }),
    __metadata("design:type", Object)
], VectorDocument.prototype, "metadata", void 0);
exports.VectorDocument = VectorDocument = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], VectorDocument);
exports.VectorSchema = mongoose_1.SchemaFactory.createForClass(VectorDocument);
//# sourceMappingURL=vector-store.schema.js.map