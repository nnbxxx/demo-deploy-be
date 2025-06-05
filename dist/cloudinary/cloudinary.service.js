"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const cloudinary_build_url_1 = require("cloudinary-build-url");
const streamifier = __importStar(require("streamifier"));
let CloudinaryService = class CloudinaryService {
    uploadFile(file, folder) {
        return new Promise((resolve, reject) => {
            let resourceType;
            if (file.mimetype.startsWith('image/')) {
                resourceType = 'image';
            }
            else if (file.mimetype.startsWith('video/')) {
                resourceType = 'video';
            }
            else {
                resourceType = 'raw';
            }
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                folder: folder, resource_type: resourceType,
                transformation: [
                    { width: 736, height: 1104, crop: 'pad', background: 'auto' }
                ]
            }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }
    async uploadMultipleFile(files, folder) {
        const uploadedResults = await Promise.all(files.map((file) => this.uploadFile(file, folder)));
        const result = uploadedResults.map(item => item.url);
        return result;
    }
    destroy(publicId) {
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader.destroy(publicId, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
        });
    }
    async deleteImageOnCloud(url) {
        const publicId = (0, cloudinary_build_url_1.extractPublicId)(url);
        const result = await this.destroy(publicId);
        if (result.result !== 'ok')
            throw new common_1.NotFoundException("Delete Image Cloudinary Fail");
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map