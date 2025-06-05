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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_2 = __importDefault(require("mongoose"));
let NotificationsService = class NotificationsService {
    constructor(notificationModel) {
        this.notificationModel = notificationModel;
    }
    async create(createNotificationDto) {
        const { message, title, userId, navigate } = createNotificationDto;
        const oldNotification = await this.notificationModel.findOne({
            userId: userId,
            title: title,
            message: message,
            navigate: navigate
        });
        if (oldNotification)
            return oldNotification;
        return await this.notificationModel.create({
            message, title, userId, navigate
        });
        ;
    }
    async getNotificationsByUser(userId) {
        return await this.notificationModel.find({ userId }).sort({ createdAt: -1 });
    }
    async markAsRead(notificationId, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(notificationId)) {
            throw new common_1.BadRequestException(`not found notification with id=${notificationId}`);
        }
        return await this.notificationModel.findOneAndUpdate({ _id: notificationId, userId: user._id }, { isRead: true }, { new: true });
    }
    async markAllAsRead(user) {
        const result = await this.notificationModel.updateMany({ isRead: false, userId: user._id }, { $set: { isRead: true } });
        return result.modifiedCount;
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.notificationModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.notificationModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select('')
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
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Notification')),
    __metadata("design:paramtypes", [Object])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map