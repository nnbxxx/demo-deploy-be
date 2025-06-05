
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

import { Product } from "src/modules/products/schemas/product.schemas";
import { CartItem } from "../dto/update-cart.dto";
import { User } from "src/modules/users/schemas/user.schema";
import { Color } from "src/color/schemas/color.schemas";

export type CartDocument = HydratedDocument<Cart>;
@Schema({ timestamps: true })
export class Cart {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

    @Prop({
        require: true,
        type: [{
            product: { type: mongoose.Schema.Types.ObjectId, ref: Product.name, require: true, },
            color: { type: String, },
            size: { type: String, },
            quantity: { type: Number, require: true, },
            price: { type: Number, require: true, },
        }]
    })
    items: CartItem[];

    // giá tiền
    @Prop({ type: Number, default: 0 })
    total: number;

    @Prop({ type: Object })
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId;
        email: string;
    };

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
export const CartSchema = SchemaFactory.createForClass(Cart);