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
exports.BlogCategoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const blog_category_service_1 = require("./blog-category.service");
const create_blog_category_dto_1 = require("./dto/create-blog-category.dto");
const update_blog_category_dto_1 = require("./dto/update-blog-category.dto");
const swagger_1 = require("@nestjs/swagger");
const customize_1 = require("../decorator/customize");
let BlogCategoryController = class BlogCategoryController {
    constructor(blogCategoryService) {
        this.blogCategoryService = blogCategoryService;
    }
    create(createBlogCategoryDto, user) {
        return this.blogCategoryService.create(createBlogCategoryDto, user);
    }
    findAll(currentPage, limit, qs) {
        return this.blogCategoryService.findAll(currentPage, limit, qs);
    }
    findOne(id) {
        return this.blogCategoryService.findOne(id);
    }
    update(updateBlogCategoryDto, user) {
        return this.blogCategoryService.update(updateBlogCategoryDto, user);
    }
    remove(id, user) {
        return this.blogCategoryService.remove(id, user);
    }
};
exports.BlogCategoryController = BlogCategoryController;
__decorate([
    (0, customize_1.ResponseMessage)("Create a new BlogCategory"),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_category_dto_1.CreateBlogCategoryDto, Object]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "create", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch BlogCategory with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "findOne", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a BlogCategory"),
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_blog_category_dto_1.UpdateBlogCategoryDto, Object]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, customize_1.ResponseMessage)("Delete a BlogCategory"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "remove", null);
exports.BlogCategoryController = BlogCategoryController = __decorate([
    (0, swagger_1.ApiTags)('blog-category'),
    (0, common_1.Controller)('blog-category'),
    __metadata("design:paramtypes", [blog_category_service_1.BlogCategoryService])
], BlogCategoryController);
//# sourceMappingURL=blog-category.controller.js.map