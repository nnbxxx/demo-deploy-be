import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CheckValidCoupon, CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coupon, CouponDocument } from './schemas/coupon.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import dayjs from 'dayjs';
import { UsersService } from '../users/users.service';


@Injectable()
export class CouponsService {
  constructor(
    @InjectModel(Coupon.name)
    private couponModel: SoftDeleteModel<CouponDocument>,
    private userService: UsersService,


  ) { }
  async create(createCouponDto: CreateCouponDto, user: IUser) {
    const existingCoupon = await this.couponModel.findOne({ code: createCouponDto.code });
    if (existingCoupon) {
      throw new ConflictException('Coupon code must be unique');
    }


    return this.couponModel.create({
      ...createCouponDto,
      couponExpired: dayjs(createCouponDto.couponExpired).toDate(),
      createdBy: {
        _id: user._id,
        email: user.email
      }
    })

  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 1000;

    const totalItems = (await this.couponModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);


    const result = await this.couponModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .select([''])
      .populate(population)
      .exec();


    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages,  //tổng số trang với điều kiện query
        total: totalItems // tổng số phần tử (số bản ghi)
      },
      result //kết quả query
    }

  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`not found coupon with id=${id}`);
    }
    return await this.couponModel.findById(id);
  }

  async update(updateCouponDto: UpdateCouponDto, user: IUser) {

    return await this.couponModel.updateOne(
      { _id: updateCouponDto._id },
      {
        ...updateCouponDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`not found coupon with id=${id}`); // status: 200 => 400
    }
    await this.couponModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.couponModel.softDelete({ _id: id });
  }
  async autoNotificationCoupons() {
    // danh sách coupons còn sử dụng được
    const coupons = await this.couponModel
      .find({
        isActive: true,
        isDeleted: false,
        quantity: { $gte: 1 },
        couponExpired: { $gte: dayjs().toDate() },
      })
      .select({ _id: 1, code: 1, description: 1, name: 1, couponExpired: 1 })
      .exec();


    coupons.forEach(async (coupon) => {
      const { pointAccept } = coupon.description as any
      const { _id, code, name, couponExpired } = coupon
      // danh sách user chưa có coupon có _id và đủ điều kiện 
      const listUser = await this.userService.getAllUserAcceptPoint(pointAccept, _id as any)
      listUser.forEach(async (user) => {

        this.userService.updateUserNewCoupons(user._id as any, { _id, code, name, couponExpired } as any)

        const connectSocketId = await this.userService.checkConnectSocketIo(user._id as any);


      })

    })
  }
  async checkValidCoupon(checkValidCouponDto: CheckValidCoupon, user: IUser, active: boolean = true) {
    const { code } = checkValidCouponDto
    const codeCheck = await this.couponModel.findOne({ code: code })
    if (codeCheck.quantity === 0) {
      throw new BadRequestException(`Coupon có mã code ${code} hết hiệu lực`)
    }
    if (codeCheck) {
      // xử lý active code
      codeCheck.quantity += active ? -1 : 1;
      await this.userService.checkIsActiveCode(user._id, codeCheck._id as any, active)
      await codeCheck.save();
      return codeCheck
    }
    else {
      throw new NotFoundException(`Not found Coupon with code = ${code}`)
    }
  }
}
