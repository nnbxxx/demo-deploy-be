"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorStoreModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vector_store_service_1 = require("./vector-store.service");
const vector_store_schema_1 = require("./schemas/vector-store.schema");
let VectorStoreModule = class VectorStoreModule {
};
exports.VectorStoreModule = VectorStoreModule;
exports.VectorStoreModule = VectorStoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: vector_store_schema_1.Vector.name, schema: vector_store_schema_1.VectorSchema }]),
        ],
        providers: [vector_store_service_1.VectorStoreService],
        exports: [vector_store_service_1.VectorStoreService, mongoose_1.MongooseModule],
    })
], VectorStoreModule);
//# sourceMappingURL=vector-store.module.js.map