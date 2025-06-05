import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TYPE_GENDER } from 'src/constants/schema.enum';
import { Coupon } from 'src/modules/coupons/schemas/coupon.schemas';
import { Product } from 'src/modules/products/schemas/product.schemas';
import { Role } from 'src/modules/roles/schemas/role.schemas';
// import { Role } from 'src/roles/schemas/role.schemas';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class RecentViewProduct {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name, required: true })
    productId: mongoose.Schema.Types.ObjectId;

    @Prop({ type: Date, required: true })
    timeView: Date;
}
@Schema({ timestamps: true }) // biến class thành 1 schema // lấy time at
export class User {
    @Prop()
    name: string;
    @Prop({ required: true, type: String, default: 'http://res.cloudinary.com/dyhpycx4c/image/upload/v1730186934/new-img/eh8udjbm4x4zossupogb.png' })
    avatar: string;

    @Prop({ required: true })
    email: string; // unique

    @Prop({ required: true })
    password: string;

    @Prop({ default: 0 })
    age: number;

    @Prop({ type: String, enum: TYPE_GENDER, default: TYPE_GENDER.MALE, required: true })
    gender: TYPE_GENDER;

    @Prop({ default: '' })
    address: string;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.name })
    // role: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true, type: [mongoose.Schema.Types.ObjectId], ref: Product.name, default: [] },)
    purchasedProducts: [mongoose.Schema.Types.ObjectId];
    @Prop({
        type: [RecentViewProduct],
        default: [],
        required: true,
    })
    recentViewProducts: RecentViewProduct[];

    @Prop({
        type: [{
            _id: { type: mongoose.Schema.Types.ObjectId, ref: Coupon.name },
            isActive: { type: Boolean, required: true, default: false },
            name: { type: String, required: true },
            code: { type: String, required: true },
            couponExpired: { type: Date, required: true },
        }],
        required: true, default: []
    })
    couponsUser: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            isActive: boolean,
            name: string,
            code: string,
            couponExpired: Date
        }
    ];

    @Prop()
    refreshToken: string;

    @Prop({ type: Object })
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };
    @Prop()
    image: string;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.name })
    // role: mongoose.Schema.Types.ObjectId;
    @Prop({ type: String, default: 'user' })
    role: string
    @Prop({ default: 0 })
    point: number;

    @Prop({ default: "LOCAL" })
    accountType: string;

    @Prop({ default: false })
    isActive: boolean;
    @Prop({ default: false })
    isBlocked: boolean;

    @Prop()
    codeId: string;

    @Prop()
    codeExpired: Date;

    @Prop({ default: null })
    socketId: string;
    @Prop({ type: Object })
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };

    @Prop({ type: Object })
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

    @Prop()
    isDeleted: boolean;

    @Prop()
    deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
