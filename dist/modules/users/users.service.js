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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = __importDefault(require("mongoose"));
const bcryptjs_1 = require("bcryptjs");
const customize_1 = require("../../decorator/customize");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mailer_1 = require("@nestjs-modules/mailer");
const dayjs_1 = __importDefault(require("dayjs"));
const crypto = __importStar(require("crypto"));
let UsersService = class UsersService {
    constructor(userModel, mailerService) {
        this.userModel = userModel;
        this.mailerService = mailerService;
        this.getHashPassword = (password) => {
            const salt = (0, bcryptjs_1.genSaltSync)(10);
            const hash = (0, bcryptjs_1.hashSync)(password, salt);
            return hash;
        };
        this.updateUserToken = async (refreshToken, _id, isActive = true) => {
            return await this.userModel.updateOne({ _id }, { refreshToken }, { isActive });
        };
        this.findUserByToken = async (refreshToken) => {
            return await this.userModel.findOne({ refreshToken }).populate({
                path: "role",
                select: { name: 1 }
            });
        };
    }
    async create(createUserDto, user) {
        const { name, email, password, gender, } = createUserDto;
        const isExist = await this.userModel.findOne({ email });
        if (isExist) {
            throw new common_1.BadRequestException(`Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`);
        }
        const hashPassword = this.getHashPassword(password);
        let newUser = await this.userModel.create({
            name, email,
            password: hashPassword,
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
        return newUser;
    }
    async register(user) {
        const { name, email, password } = user;
        const isExist = await this.userModel.findOne({ email });
        if (isExist) {
            throw new common_1.BadRequestException(`Email: ${email} đã tồn tại trên hệ thống. Vui lòng sử dụng email khác.`);
        }
        const hashPassword = this.getHashPassword(password);
        const codeId = crypto.randomInt(100000, 999999);
        let newRegister = await this.userModel.create({
            name, email,
            password: hashPassword,
            isActive: false,
            codeId: codeId,
            codeExpired: (0, dayjs_1.default)().add(5, 'minutes')
        });
        this.mailerService.sendMail({
            to: user.email,
            subject: 'Activate your account at @ABCxyz',
            template: "register",
            context: {
                name: user?.name ?? user.email,
                activationCode: codeId
            }
        });
        return newRegister;
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.userModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.userModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select('-password')
            .populate(population)
            .exec();
        return {
            meta: {
                current: currentPage,
                pageSize: limit,
                pages: totalPages,
                total: totalItems
            },
            result
        };
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return `not found user`;
        return await this.userModel.findOne({
            _id: id
        })
            .select("-password")
            .populate({ path: "role", select: { name: 1, _id: 1 } });
    }
    async findOneCoupon(id) {
        const user = await this.userModel
            .findOne({ _id: id, isActive: true })
            .select(["couponsUser", "name", "email"]);
        if (!user) {
            throw new common_1.NotFoundException('User not found or inactive');
        }
        const inactiveCoupons = user.couponsUser.filter(coupon => coupon.isActive === false);
        return {
            ...user.toObject(),
            couponsUser: inactiveCoupons
        };
    }
    findOneByUsername(username) {
        return this.userModel.findOne({
            email: username
        }).populate({
            path: "role",
            select: { name: 1 }
        });
    }
    isValidPassword(password, hash) {
        return (0, bcryptjs_1.compareSync)(password, hash);
    }
    async update(updateUserDto, user) {
        const updated = await this.userModel.updateOne({ _id: updateUserDto._id }, {
            ...updateUserDto,
            updatedBy: {
                _id: user._id,
                email: user.email
            }
        });
        return updated;
    }
    async remove(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return `not found user`;
        await this.userModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email
            }
        });
        return this.userModel.softDelete({
            _id: id
        });
    }
    async handleActive(data) {
        const user = await this.userModel.findOne({
            email: data.email,
            codeId: data.code
        });
        if (!user) {
            throw new common_1.BadRequestException("Mã OTP không hợp lệ hoặc đã hết hạn");
        }
        const isBeforeCheck = (0, dayjs_1.default)().isBefore(user.codeExpired);
        if (isBeforeCheck) {
            await this.userModel.updateOne({
                email: data.email,
                codeId: data.code
            }, {
                isActive: true
            });
            return { isBeforeCheck };
        }
        else {
            throw new common_1.BadRequestException("Mã code không hợp lệ hoặc đã hết hạn");
        }
    }
    async retryActive(email) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.BadRequestException("Tài khoản không tồn tại");
        }
        if (user.isActive) {
            throw new common_1.BadRequestException("Tài khoản đã được kích hoạt");
        }
        const codeId = crypto.randomInt(100000, 999999);
        await user.updateOne({
            codeId: codeId,
            codeExpired: (0, dayjs_1.default)().add(5, 'minutes')
        });
        this.mailerService.sendMail({
            to: user.email,
            subject: 'Activate your account at @ABCxyz',
            template: "register",
            context: {
                name: user?.name ?? user.email,
                activationCode: codeId
            }
        });
        return { _id: user._id };
    }
    async retryPassword(email) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.BadRequestException("Tài khoản không tồn tại");
        }
        const codeId = crypto.randomInt(100000, 999999);
        await user.updateOne({
            codeId: codeId,
            codeExpired: (0, dayjs_1.default)().add(5, 'minutes')
        });
        this.mailerService.sendMail({
            to: user.email,
            subject: 'Change your password account at @ABCxyz',
            template: "register",
            context: {
                name: user?.name ?? user.email,
                activationCode: codeId
            }
        });
        return { _id: user._id, email: user.email };
    }
    async changePassword(data) {
        if (data.confirmPassword !== data.password) {
            throw new common_1.BadRequestException("Mật khẩu/xác nhận mật khẩu không chính xác.");
        }
        const user = await this.userModel.findOne({ email: data.email });
        if (!user) {
            throw new common_1.BadRequestException("Tài khoản không tồn tại");
        }
        const isBeforeCheck = (0, dayjs_1.default)().isBefore(user.codeExpired);
        if (isBeforeCheck) {
            const newPassword = this.getHashPassword(data.password);
            await user.updateOne({ password: newPassword });
            return { isBeforeCheck };
        }
        else {
            throw new common_1.BadRequestException("Mã code không hợp lệ hoặc đã hết hạn");
        }
    }
    async updateProfile(userDto, user) {
        let updateUser = await this.userModel.updateOne({ _id: user._id }, {
            ...userDto,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        return updateUser;
    }
    async updatePurchasedProducts(userId, productIds, point) {
        await this.userModel.findByIdAndUpdate(userId, {
            $addToSet: { purchasedProducts: { $each: productIds } },
            $inc: { point: point }
        }, {
            new: true,
        });
    }
    async updateRecentViewProduct(user, productId) {
        await this.userModel.findByIdAndUpdate(user._id, {
            $addToSet: { recentViewProducts: { productId, timeView: Date.now() } },
        }, {
            new: true,
        });
    }
    async checkPurchasedProduct(userId, productId) {
        const re = await this.userModel.findById(userId);
        return re.purchasedProducts.includes(productId);
    }
    async updateSocketId(userId, socketId = null) {
        return await this.userModel.findByIdAndUpdate({ _id: userId }, {
            $set: { socketId: socketId }
        });
    }
    async getAllUserAcceptPoint(point = 0, couponId) {
        if (!mongoose_2.default.Types.ObjectId.isValid(couponId))
            throw new common_1.NotFoundException(`Not found coupon`);
        return await this.userModel.find({
            isActive: true,
            point: { $gte: point },
            'couponsUser._id': { $nin: [couponId] }
        })
            .select({ point: 1, _id: 1, couponsUser: 1 })
            .exec();
    }
    async updateUserNewCoupons(userId, coupon) {
        if (!mongoose_2.default.Types.ObjectId.isValid(userId))
            throw new common_1.NotFoundException(`Not found coupon`);
        const { _id, name, code, couponExpired } = coupon;
        await this.userModel.findByIdAndUpdate(userId, {
            $addToSet: {
                couponsUser: {
                    _id, name, code, couponExpired,
                    isActive: false,
                }
            },
        }, {
            new: true,
        });
    }
    async checkConnectSocketIo(userId) {
        const user = await this.findOne(userId);
        return user.socketId;
    }
    async checkIsActiveCode(userId, couponId, active = true) {
        const user = await this.userModel.findOne({
            _id: userId
        });
        const coupon = user.couponsUser.find(coupon => {
            return (new mongoose_2.default.Types.ObjectId(coupon._id.toString())).equals(couponId) && coupon.isActive === !active;
        });
        if (!coupon && active === true) {
            throw new common_1.NotFoundException(`Coupon with ID ${couponId} for this user is actived`);
        }
        if (coupon) {
            coupon.isActive = active;
            await user.save();
        }
        else {
            throw new common_1.NotFoundException(`Coupon with ID ${couponId} for this user is actived`);
        }
    }
    async updateUserProfile(user, data) {
        const updated = await this.userModel.updateOne({ _id: user._id }, {
            ...data,
            updatedBy: {
                _id: user._id,
                email: user.email
            }
        });
        return updated;
    }
    async updateUserRole(id, role) {
        const user = await this.userModel.findById(id);
        user.role = role.role;
        await user.save();
        return user;
    }
    async blockUser(id) {
        const user = await this.userModel.findById(id);
        user.isBlocked = !user.isBlocked;
        await user.save();
        return user;
    }
};
exports.UsersService = UsersService;
__decorate([
    __param(1, (0, customize_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "create", null);
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [Object, mailer_1.MailerService])
], UsersService);
//# sourceMappingURL=users.service.js.map