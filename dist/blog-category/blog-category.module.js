"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const blog_category_service_1 = require("./blog-category.service");
const blog_category_controller_1 = require("./blog-category.controller");
const mongoose_1 = require("@nestjs/mongoose");
const blog_category_schemas_1 = require("./schemas/blog-category.schemas");
let BlogCategoryModule = class BlogCategoryModule {
};
exports.BlogCategoryModule = BlogCategoryModule;
exports.BlogCategoryModule = BlogCategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [blog_category_controller_1.BlogCategoryController],
        providers: [blog_category_service_1.BlogCategoryService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: blog_category_schemas_1.BlogCategory.name, schema: blog_category_schemas_1.BlogCategorySchema }])],
        exports: [blog_category_service_1.BlogCategoryService],
    })
], BlogCategoryModule);
//# sourceMappingURL=blog-category.module.js.map