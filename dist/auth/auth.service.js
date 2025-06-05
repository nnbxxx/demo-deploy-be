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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
const users_service_1 = require("../modules/users/users.service");
const carts_service_1 = require("../modules/carts/carts.service");
const like_products_service_1 = require("../modules/like-products/like-products.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService, cartService, likeProductService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.cartService = cartService;
        this.likeProductService = likeProductService;
        this.handleActive = async (data) => {
            return await this.usersService.handleActive(data);
        };
        this.checkCode = async (data) => {
            return await this.usersService.handleActive(data);
        };
        this.retryActive = async (data) => {
            return await this.usersService.retryActive(data);
        };
        this.retryPassword = async (email) => {
            return await this.usersService.retryPassword(email);
        };
        this.changePassword = async (data) => {
            return await this.usersService.changePassword(data);
        };
        this.createRefreshToken = (payload) => {
            const refresh_token = this.jwtService.sign(payload, {
                secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
                expiresIn: (0, ms_1.default)(this.configService.get('JWT_REFRESH_EXPIRE')) / 1000,
            });
            return refresh_token;
        };
        this.processNewToken = async (refreshToken, response) => {
            try {
                this.jwtService.verify(refreshToken, {
                    secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
                });
                let user = await this.usersService.findUserByToken(refreshToken);
                if (user) {
                    const { _id, name, email, role, age, gender, address, avatar, point, } = user;
                    const payload = {
                        sub: 'token refresh',
                        iss: 'from server',
                        _id,
                        name,
                        email,
                        role,
                        age,
                        gender,
                        address,
                        avatar,
                        point,
                    };
                    const refresh_token = this.createRefreshToken(payload);
                    await this.usersService.updateUserToken(refresh_token, _id.toString());
                    response.clearCookie('refresh_token');
                    response.cookie('refresh_token', refresh_token, {
                        httpOnly: true,
                        maxAge: (0, ms_1.default)(this.configService.get('JWT_REFRESH_EXPIRE')),
                    });
                    return {
                        access_token: this.jwtService.sign(payload),
                        user: {
                            _id,
                            name,
                            email,
                            role,
                            age,
                            gender,
                            address,
                            avatar,
                            point,
                        },
                    };
                }
                else {
                    throw new common_1.BadRequestException(`Refresh token không hợp lệ. Vui lòng login.`);
                }
            }
            catch (error) {
                throw new common_1.BadRequestException(`Refresh token không hợp lệ. Vui lòng login.`);
            }
        };
        this.logout = async (response, user) => {
            if (user.role.name === 'admin') {
                await this.usersService.updateUserToken('', user._id, false);
            }
            else {
                await this.usersService.updateUserToken('', user._id);
            }
            response.clearCookie('refresh_token');
            return 'ok';
        };
    }
    async validateUser(username, pass) {
        const user = await this.usersService.findOneByUsername(username);
        return user;
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid === true) {
                return user;
            }
        }
        return null;
    }
    async login(user, response) {
        const { _id, name, email, role, age, gender, address, avatar, point } = user;
        const payload = {
            sub: 'token login',
            iss: 'from server',
            avatar,
            _id,
            name,
            email,
            age,
            gender,
            address,
            role,
            point,
        };
        const refresh_token = this.createRefreshToken(payload);
        await this.usersService.updateUserToken(refresh_token, _id);
        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: (0, ms_1.default)(this.configService.get('JWT_REFRESH_EXPIRE')),
        });
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                name,
                email,
                role,
                age,
                gender,
                address,
                avatar,
                point,
            },
        };
    }
    async register(user) {
        let newUser = await this.usersService.register(user);
        await this.cartService.create(newUser);
        await this.likeProductService.create(newUser);
        return {
            _id: newUser?._id,
            createdAt: newUser?.createdAt,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService,
        carts_service_1.CartsService,
        like_products_service_1.LikeProductsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map