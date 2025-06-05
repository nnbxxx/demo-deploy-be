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
exports.FilesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../../decorator/customize");
const cloudinary_service_1 = require("../../cloudinary/cloudinary.service");
let FilesController = class FilesController {
    constructor(filesService, cloudinaryService) {
        this.filesService = filesService;
        this.cloudinaryService = cloudinaryService;
    }
    async uploadFile(file) {
        const imgUrl = (await this.cloudinaryService.uploadFile(file, 'new-img')).url;
        return imgUrl;
    }
    async uploadFiles(files) {
        if (files) {
            const resultUpload = await this.cloudinaryService.uploadMultipleFile(files, 'new-img-files');
            return resultUpload;
        }
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, customize_1.ResponseMessage)("Upload a new file"),
    (0, customize_1.Public)(),
    (0, common_1.Patch)("/file"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiOperation)({ summary: "Uploads a single file" }),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiBody)({
        required: true,
        schema: {
            type: "object",
            properties: {
                file: {
                    type: "string",
                    format: "binary",
                }
            }
        }
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addMaxSizeValidator({
        maxSize: 10000 * 1024 * 1024
    })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
__decorate([
    (0, customize_1.ResponseMessage)("Upload multiple new file"),
    (0, customize_1.Public)(),
    (0, common_1.Patch)("/files"),
    (0, swagger_1.ApiConsumes)("multipart/form-data"),
    (0, swagger_1.ApiOperation)({ summary: "Uploads multiple files" }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("files", 10)),
    (0, swagger_1.ApiBody)({
        required: true,
        schema: {
            type: "object",
            properties: {
                files: {
                    type: "array",
                    items: {
                        type: "string",
                        format: "binary"
                    }
                }
            }
        }
    }),
    openapi.ApiResponse({ status: 200, type: [String] }),
    __param(0, (0, common_1.UploadedFiles)(new common_1.ParseFilePipeBuilder()
        .addMaxSizeValidator({
        maxSize: 10000 * 1024 * 1024
    })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFiles", null);
exports.FilesController = FilesController = __decorate([
    (0, swagger_1.ApiTags)('files'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService, cloudinary_service_1.CloudinaryService])
], FilesController);
//# sourceMappingURL=files.controller.js.map