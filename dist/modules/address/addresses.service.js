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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const addresses_schemas_1 = require("./schemas/addresses.schemas");
const mongoose_2 = require("mongoose");
const api_query_params_1 = __importDefault(require("api-query-params"));
let AddressService = class AddressService {
    constructor(addressModel) {
        this.addressModel = addressModel;
    }
    async create(createAddressDto) {
        const address = this.addressModel.create({ ...createAddressDto });
        return address;
    }
    async createMultiple(createAddressMultipleDto) {
        createAddressMultipleDto.data.forEach(async (element) => {
            await this.addressModel.create({ ...element });
        });
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.addressModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.addressModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select([])
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
    async getProvince() {
        const re = await this.addressModel.find({}).select({ Id: 1, Name: 1, _id: 0 }).exec();
        return re;
    }
    async getDistrictsByCityId(id) {
        const result = await this.addressModel.findOne({ Id: id });
        if (!result) {
            throw new common_1.NotFoundException(`Không có thành phố Id = ${id}`);
        }
        return result.Districts.map((district) => ({
            Id: district.Id,
            Name: district.Name,
        }));
        ;
    }
    async getWardByCityId(provinceId, districtId) {
        const province = await this.addressModel.findOne({ Id: provinceId });
        if (!province) {
            throw new common_1.NotFoundException(`Không có thành phố Id = ${provinceId}`);
        }
        const district = province.Districts.find((district) => {
            return district.Id === districtId;
        });
        if (!district) {
            throw new common_1.NotFoundException(`Không có quận/huyện/thành phố Id = ${districtId}`);
        }
        return district.Wards.map(ward => ({
            Id: ward.Id,
            Name: ward.Name,
        }));
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(addresses_schemas_1.Address.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AddressService);
//# sourceMappingURL=addresses.service.js.map