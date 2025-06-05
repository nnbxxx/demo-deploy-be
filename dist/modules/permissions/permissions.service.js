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
exports.PermissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const permission_schemas_1 = require("./schemas/permission.schemas");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_2 = __importDefault(require("mongoose"));
let PermissionsService = class PermissionsService {
    constructor(permissionModel) {
        this.permissionModel = permissionModel;
    }
    async create(createPermissionDto, user) {
        const { name, apiPath, method, module } = createPermissionDto;
        const newPermission = await this.permissionModel.create({
            name, apiPath, method, module,
            createdBy: {
                _id: user._id,
                email: user.email
            }
        });
        return {
            _id: newPermission?._id,
            createdAt: newPermission?.createdAt
        };
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population, projection } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.permissionModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.permissionModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .populate(population)
            .select(projection)
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
            throw new common_1.BadRequestException("not found permission");
        }
        return await this.permissionModel.findById(id);
    }
    async update(_id, updatePermissionDto, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(_id)) {
            throw new common_1.BadRequestException("not found permission");
        }
        const { module, method, apiPath, name } = updatePermissionDto;
        const isExist = await this.permissionModel.findOne({ apiPath, method });
        if (isExist) {
            throw new common_1.BadRequestException(`Permission với apiPath="${apiPath}" , method="${method}" đã tồn tại!`);
        }
        const updated = await this.permissionModel.updateOne({ _id }, {
            module, method, apiPath, name,
            updatedBy: {
                _id: user._id,
                email: user.email
            }
        });
        return updated;
    }
    async remove(id, user) {
        await this.permissionModel.updateOne({ _id: id }, {
            deletedBy: {
                _id: user._id,
                email: user.email
            }
        });
        return this.permissionModel.softDelete({
            _id: id
        });
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(permission_schemas_1.Permission.name)),
    __metadata("design:paramtypes", [Object])
], PermissionsService);
//# sourceMappingURL=permissions.service.js.map