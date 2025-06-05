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
exports.AddressUserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const address_user_schemas_1 = require("./schemas/address-user.schemas");
const api_query_params_1 = __importDefault(require("api-query-params"));
const mongoose_2 = __importDefault(require("mongoose"));
let AddressUserService = class AddressUserService {
    constructor(addressUserModel) {
        this.addressUserModel = addressUserModel;
    }
    async create(createAddressUserDto, _user) {
        const { districts, phone, isDefault, province, receiver, specific, user, wards } = createAddressUserDto;
        const oldAddressUser = await this.addressUserModel.findOne({
            districts, phone, province, receiver, specific, user, wards
        });
        if (oldAddressUser)
            return oldAddressUser;
        if (isDefault) {
            const addU = await this.addressUserModel.findOne({ isDefault: true });
            if (addU) {
                addU.isDefault = false;
                await addU.save();
            }
        }
        return await this.addressUserModel.create({
            ...createAddressUserDto,
        });
    }
    async findAll(currentPage, limit, qs) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        const totalItems = (await this.addressUserModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.addressUserModel.find(filter)
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
    async findDefaultAddress(user) {
        const re = await this.addressUserModel.findOne({ user: user._id, isDefault: true });
        if (re) {
            return re;
        }
        else {
            throw new common_1.NotFoundException('Không tìm thấy default address');
        }
    }
    async findUserAddress(user, id) {
        const re = await this.addressUserModel.findOne({ user: user._id, _id: id });
        if (re) {
            return re;
        }
        else {
            throw new common_1.NotFoundException('Không tìm thấy address');
        }
    }
    async update(updateAddressUserDto) {
        return await this.addressUserModel.updateOne({ _id: updateAddressUserDto._id }, {
            ...updateAddressUserDto,
        });
    }
    async updateUser(updateAddressUserDto, user) {
        const re = await this.addressUserModel.updateOne({
            _id: updateAddressUserDto._id,
            user: user._id
        }, {
            ...updateAddressUserDto,
        });
        return re;
    }
    async removeForUser(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException(`not found address user`);
        const address = await this.addressUserModel.findOne({ _id: id, user: user._id });
        if (address) {
            if (address.isDefault === true) {
                throw new common_1.BadRequestException(`Địa chỉ mặc định không thể xóa được`);
            }
            return this.addressUserModel.softDelete({
                _id: id
            });
        }
        else {
            throw new common_1.NotFoundException(`not found address user`);
        }
    }
    async updateDefaultAddressUser(id, user) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException(`not found address user`);
        const address = await this.addressUserModel.findOne({ _id: id, user: user._id });
        const oldDefaultAddress = await this.addressUserModel.findOne({ user: user._id, isDefault: true });
        if (oldDefaultAddress) {
            oldDefaultAddress.isDefault = false;
            await oldDefaultAddress.save();
        }
        if (address) {
            address.isDefault = true;
            await address.save();
            return address;
        }
        else {
            throw new common_1.NotFoundException(`not found address user`);
        }
    }
};
exports.AddressUserService = AddressUserService;
exports.AddressUserService = AddressUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(address_user_schemas_1.AddressUser.name)),
    __metadata("design:paramtypes", [Object])
], AddressUserService);
//# sourceMappingURL=address-user.service.js.map