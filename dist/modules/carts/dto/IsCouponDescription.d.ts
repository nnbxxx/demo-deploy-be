import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { CouponDiscount, CouponPrice } from 'src/modules/coupons/dto/create-coupon.dto';
export declare class IsCouponDescription implements ValidatorConstraintInterface {
    validate(description: any, args: ValidationArguments): description is CouponPrice | CouponDiscount;
    defaultMessage(args: ValidationArguments): string;
}
