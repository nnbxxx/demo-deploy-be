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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const customize_1 = require("../decorator/customize");
const local_auth_guard_1 = require("./passport/local-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../modules/users/dto/create-user.dto");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const users_service_1 = require("../modules/users/users.service");
const update_user_dto_1 = require("../modules/users/dto/update-user.dto");
const roles_service_1 = require("../modules/roles/roles.service");
let AuthController = class AuthController {
    constructor(authService, userService, rolesService) {
        this.authService = authService;
        this.userService = userService;
        this.rolesService = rolesService;
    }
    handleLogin(req, response) {
        return this.authService.login(req.user, response);
    }
    handleRegister(registerUserDto) {
        return this.authService.register(registerUserDto);
    }
    async handleGetAccount(user) {
        return { user };
    }
    handleRefreshToken(request, response) {
        const refreshToken = request.cookies["refresh_token"];
        return this.authService.processNewToken(refreshToken, response);
    }
    handleLogout(response, user) {
        return this.authService.logout(response, user);
    }
    async handleChangePassword(userDto) {
        return this.authService.changePassword(userDto);
    }
    async handleUpdateProfile(userDto, user) {
        return this.userService.updateProfile(userDto, user);
    }
    async handleUpdateProfileWeb(userDto, user) {
        return this.userService.updateProfile(userDto, user);
    }
    checkCode(registerDto) {
        return this.authService.checkCode(registerDto);
    }
    retryActive(email) {
        return this.authService.retryActive(email);
    }
    retryPassword(email) {
        return this.authService.retryPassword(email);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, customize_1.Public)(),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.UserLoginDto, }),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, customize_1.ResponseMessage)("User Login"),
    (0, common_1.Post)('/login'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleLogin", null);
__decorate([
    (0, customize_1.Public)(),
    (0, customize_1.ResponseMessage)("Register a new user"),
    (0, common_1.Post)('/register'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleRegister", null);
__decorate([
    (0, customize_1.ResponseMessage)("Get user information"),
    (0, common_1.Get)('/account'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "handleGetAccount", null);
__decorate([
    (0, customize_1.Public)(),
    (0, customize_1.ResponseMessage)("Get User handleRefreshToken"),
    (0, common_1.Get)('/refresh'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleRefreshToken", null);
__decorate([
    (0, customize_1.ResponseMessage)("Logout User"),
    (0, common_1.Post)('/logout'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "handleLogout", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Patch)('/change-password'),
    (0, customize_1.ResponseMessage)('Change Password User'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.ChangePasswordAuthDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "handleChangePassword", null);
__decorate([
    (0, common_1.Patch)('/update-profile'),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.ProfileUserDtoSw }),
    (0, customize_1.ResponseMessage)('Update profile User'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.ProfileUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "handleUpdateProfile", null);
__decorate([
    (0, common_1.Patch)('/update-web-profile'),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.ProfileUserDtoSwWeb }),
    (0, customize_1.ResponseMessage)('Update profile User'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.ProfileUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "handleUpdateProfileWeb", null);
__decorate([
    (0, common_1.Post)('check-code'),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.CodeAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkCode", null);
__decorate([
    (0, common_1.Post)('retry-active'),
    (0, customize_1.Public)(),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.EmailSW }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "retryActive", null);
__decorate([
    (0, common_1.Post)('retry-password'),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.EmailSW }),
    (0, customize_1.Public)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "retryPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        roles_service_1.RolesService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map