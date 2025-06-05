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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const customize_1 = require("../../decorator/customize");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(createUserDto, user) {
        let newUser = await this.usersService.create(createUserDto, user);
        return {
            _id: newUser?._id,
        };
    }
    findAll(currentPage, limit, qs) {
        return this.usersService.findAll(+currentPage, +limit, qs);
    }
    async findOne(id) {
        const foundUser = await this.usersService.findOne(id);
        return foundUser;
    }
    async findOneCoupon(id) {
        const foundUser = await this.usersService.findOneCoupon(id);
        return foundUser;
    }
    async update(updateUserDto, user) {
        let updatedUser = await this.usersService.update(updateUserDto, user);
        return updatedUser;
    }
    async updateProfileUser(updateUserDto, user) {
        let updatedUser = await this.usersService.updateUserProfile(user, updateUserDto);
        return updatedUser;
    }
    async updateRole(id, role) {
        let updatedUser = await this.usersService.updateUserRole(id, role);
        return updatedUser;
    }
    async blockUser(id) {
        let updatedUser = await this.usersService.blockUser(id);
        return updatedUser;
    }
    remove(id, user) {
        return this.usersService.remove(id, user);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, customize_1.ResponseMessage)("Create a new User"),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, customize_1.ResponseMessage)("Fetch user with paginate"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)("current")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, customize_1.ResponseMessage)("Fetch user by id"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/coupon/:id'),
    (0, customize_1.ResponseMessage)("Fetch user by id"),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneCoupon", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a User"),
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a User"),
    (0, common_1.Patch)('/profile'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateProfileUser, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateProfileUser", null);
__decorate([
    (0, customize_1.ResponseMessage)("Update a User Role"),
    (0, common_1.Patch)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateRole", null);
__decorate([
    (0, customize_1.ResponseMessage)("Block a User"),
    (0, common_1.Patch)('block/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "blockUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, customize_1.ResponseMessage)("Delete a User"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map