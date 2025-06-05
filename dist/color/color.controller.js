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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const color_service_1 = require("./color.service");
const create_color_dto_1 = require("./dto/create-color.dto");
const update_color_dto_1 = require("./dto/update-color.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../decorator/customize");
let ColorController = class ColorController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    create(createColorDto, user) {
        return this.colorService.create(createColorDto, user);
    }
    findAll(currentPage, limit, qs) {
        return this.colorService.findAll(currentPage, limit, qs);
    }
    findOne(id) {
        return this.colorService.findOne(id);
    }
    update(updateColorDto, user) {
        return this.colorService.update(updateColorDto, user);
    }
    remove(id, user) {
        return this.colorService.remove(id, user);
    }
};
exports.ColorController = ColorController;
__decorate([
    (0, customize_1.ResponseMessage)("Create a new color"),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_color_dto_1.CreateColorDto, Object]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "create", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch color with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "findOne", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a color"),
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_color_dto_1.UpdateColorDto, Object]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, customize_1.ResponseMessage)("Delete a color"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ColorController.prototype, "remove", null);
exports.ColorController = ColorController = __decorate([
    (0, swagger_1.ApiTags)('color'),
    (0, common_1.Controller)('color'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
//# sourceMappingURL=color.controller.js.map