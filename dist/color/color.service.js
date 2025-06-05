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
exports.ColorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const color_schemas_1 = require("./schemas/color.schemas");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_2 = __importDefault(require("mongoose"));
let ColorService = class ColorService {
    constructor(colorModel) {
        this.colorModel = colorModel;
    }
    create(createColorDto, user) {
        return this.colorModel.create({
            ...createColorDto,
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.colorModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.colorModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select([''])
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
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found color with id=${id}`);
        }
        return await this.colorModel.findById(id);
    }
    async update(updateColorDto, user) {
        return await this.colorModel.updateOne({ _id: updateColorDto._id }, {
            ...updateColorDto,
            updatedBy: {
                _id: user._id,
                email: user.email,
            },
        });
    }
    async remove(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id)) {
            throw new common_1.BadRequestException(`not found color with id=${id}`);
        }
        await this.colorModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email,
            },
        });
        return this.colorModel.softDelete({ _id: id });
    }
};
exports.ColorService = ColorService;
exports.ColorService = ColorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(color_schemas_1.Color.name)),
    __metadata("design:paramtypes", [Object])
], ColorService);
//# sourceMappingURL=color.service.js.map