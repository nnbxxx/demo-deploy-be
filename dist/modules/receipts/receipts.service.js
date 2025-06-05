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
exports.ReceiptsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const receipt_schemas_1 = require("./schemas/receipt.schemas");
const products_service_1 = require("../products/products.service");
const dayjs_1 = __importDefault(require("dayjs"));
const mongoose_2 = __importDefault(require("mongoose"));
const schema_enum_1 = require("../../constants/schema.enum");
const api_query_params_1 = __importDefault(require("api-query-params"));
const carts_service_1 = require("../carts/carts.service");
const users_service_1 = require("../users/users.service");
const inventory_product_service_1 = require("../inventory-product/inventory-product.service");
const coupons_service_1 = require("../coupons/coupons.service");
const vnpay_1 = require("vnpay");
const address_user_service_1 = require("../address-user/address-user.service");
const coupon_schemas_1 = require("../coupons/schemas/coupon.schemas");
let ReceiptsService = class ReceiptsService {
    constructor(receiptModel, productService, cartService, userService, inventoryProductService, couponService, addressUserService, couponModel) {
        this.receiptModel = receiptModel;
        this.productService = productService;
        this.cartService = cartService;
        this.userService = userService;
        this.inventoryProductService = inventoryProductService;
        this.couponService = couponService;
        this.addressUserService = addressUserService;
        this.couponModel = couponModel;
        this.vnpay = new vnpay_1.VNPay({
            vnpayHost: 'https://sandbox.vnpayment.vn',
            tmnCode: process.env.VNP_TMNCODE,
            secureSecret: process.env.VNP_HASHSECRET,
        });
    }
    async create(createReceiptDto, user) {
        await this.validate(createReceiptDto);
        const receipt = await this.receiptModel.create({
            ...createReceiptDto,
            user: user._id,
            createdBy: {
                _id: user._id,
                email: user.email
            },
            confirmationDate: (0, dayjs_1.default)().add(30, 'minutes')
        });
        this.cartService.removeAllCartItem(user);
        if (createReceiptDto?.coupons?.length > 0) {
            createReceiptDto?.coupons.forEach(async (code) => {
                await this.activeCoupons({
                    code,
                }, receipt._id, user);
            });
        }
        const tmp = await this.calcTotal(receipt._id, true);
        console.log("🚀 ~ ReceiptsService ~ create ~ tmp:", tmp);
        console.log("🚀 ~ ReceiptsService ~ create ~ receipt:", receipt);
        if (receipt.paymentMethod === schema_enum_1.PAYMENT_METHOD.VNPAY)
            return await this.generatePaymentUrl({ orderId: tmp._id, total: tmp.total });
        return tmp;
    }
    async validate(createReceiptDto) {
        const productsExist = await Promise.all(createReceiptDto.items.map(async (item) => {
            const product = await this.productService.findOne(item.product);
            return product !== null;
        }));
        const allProductsValid = productsExist.every((exists) => exists === true);
        if (!allProductsValid) {
            throw new common_1.NotFoundException(`Vui lòng kiểm tra lại danh sách sản phẩm có sản phẩm không hợp lệ`);
        }
    }
    async calcTotal(receiptId, isActive = true) {
        const found = await this.receiptModel.findById(receiptId);
        if (!found)
            throw new common_1.NotFoundException("receipt không tìm thấy");
        if (found.items.length === 0) {
            return await this.receiptModel.
                findByIdAndUpdate(receiptId, { $set: { total: 0 } }, { new: true });
        }
        let total = found.items.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity;
        }, 0);
        found.total = total;
        await found.save();
        if (isActive === true && found.coupons.length > 0) {
            const codeCheck = await this.couponModel.findOne({ code: found.coupons[0] });
            if (codeCheck.quantity === 0) {
                throw new common_1.BadRequestException(` Coupon đã hết `);
            }
            const { value } = codeCheck.description;
            if (codeCheck.type === schema_enum_1.TYPE_COUPONS.PRICE) {
                total -= value;
            }
            else if (codeCheck.type === schema_enum_1.TYPE_COUPONS.PERCENT) {
                total -= Math.min(total * value / 100, codeCheck.description?.maxDiscount);
            }
            found.total = total;
        }
        await found.save();
        return found;
    }
    async autoconfirm() {
        const unConfirmReceipts = await this.receiptModel.find({ statusUser: schema_enum_1.RECEIPT_STATUS.UNCONFIRMED }).select('_id');
        const promises = unConfirmReceipts.map(async (receipt) => {
            const re = await this.confirmReceipt(receipt._id);
            return re;
        });
        const results = await Promise.all(promises);
        const count = results.filter(Boolean).length;
        return {
            "quantityConfirmReceipts": count
        };
    }
    async confirmReceipt(receiptId) {
        const receipt = await this.findOne(receiptId);
        const date = (0, dayjs_1.default)(receipt.confirmationDate);
        if (receipt.statusUser === schema_enum_1.RECEIPT_STATUS.UNCONFIRMED && (0, dayjs_1.default)().isAfter(date)) {
            await this.receiptModel.findOneAndUpdate({ _id: receiptId }, { $set: { statusUser: schema_enum_1.RECEIPT_STATUS.CONFIRMED, statusSupplier: schema_enum_1.RECEIPT_STATUS.CONFIRMED } }, { new: true });
            return true;
        }
        return false;
    }
    async findAll(currentPage, limit, qs, user) {
        const { filter, sort, population } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        let offset = (+currentPage - 1) * (+limit);
        let defaultLimit = +limit ? +limit : 1000;
        if (user) {
            const totalItems = (await this.receiptModel.find({ ...filter, user: user._id })).length;
            const totalPages = Math.ceil(totalItems / defaultLimit);
            const result = await this.receiptModel.find({ ...filter, user: user._id })
                .skip(offset)
                .limit(defaultLimit)
                .sort(sort)
                .select([])
                .populate({
                path: 'items.product',
                select: 'name images price',
            })
                .populate({
                path: 'address',
                select: 'receiver phone province districts wards specific',
            })
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
        const totalItems = (await this.receiptModel.find({ ...filter })).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        const result = await this.receiptModel.find({ ...filter })
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .select([])
            .populate({
            path: 'items.product',
            select: 'name images',
        })
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
    async findOne(receiptId) {
        if (!mongoose_2.default.Types.ObjectId.isValid(receiptId)) {
            throw new common_1.NotFoundException(`not found receipt with id=${receiptId}`);
        }
        const receipt = await this.receiptModel.findById(receiptId)
            .populate({
            path: 'items.product',
            select: 'name images brand',
        })
            .populate({
            path: 'address',
            select: 'receiver phone province districts wards specific',
        })
            .exec();
        if (!receipt) {
            throw new common_1.NotFoundException(`not found receipt with id=${receiptId}`);
        }
        return receipt;
    }
    async getDashboard() {
        const result = await this.receiptModel.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 },
                },
            },
        ]);
        const formattedResult = result.reduce((acc, item) => {
            acc[item._id] = item.count;
            return acc;
        }, {});
        const statuses = [
            'CONFIRMED',
            'UNCONFIRMED',
            'PREPARE',
            'ON_DELIVERY',
            'DELIVERED',
            'CANCEL',
        ];
        const response = statuses.reduce((acc, status) => {
            acc[status] = formattedResult[status] || 0;
            return acc;
        }, {});
        return response;
    }
    async updateForUser(updateReceiptDto) {
        const receipt = await this.findOne(updateReceiptDto._id);
        await this.receiptModel.updateOne({ _id: updateReceiptDto._id }, {
            ...updateReceiptDto
        });
        return await this.calcTotal(receipt._id, false);
    }
    async updateStatus(updateStatusDto) {
        const receipt = await this.findOne(updateStatusDto._id);
        console.log("🚀 ~ ReceiptsService ~ updateStatus ~ receipt:", receipt);
        if (receipt) {
            if (updateStatusDto.statusSupplier === schema_enum_1.RECEIPT_STATUS.DELIVERED) {
                const user = {
                    _id: receipt.user
                };
                this.confirmPayment(receipt._id, user);
            }
            receipt.statusUser = updateStatusDto.statusSupplier;
            receipt.statusSupplier = updateStatusDto.statusSupplier;
            await receipt.save();
            console.log("🚀 ~ ReceiptsService ~ updateStatus ~ receipt:", receipt);
            return receipt;
        }
        else {
            throw new common_1.NotFoundException(`Not found Receipt with Id = ${updateStatusDto._id}`);
        }
    }
    async removeForUser(id, user) {
        const receipt = await this.findOne(id);
        if (receipt.statusUser === schema_enum_1.RECEIPT_STATUS.CONFIRMED) {
            throw new common_1.BadRequestException(`Đơn hàng đã xác nhận, vui lòng liên hệ nhà cung cấp để hủy đơn hàng`);
        }
        await this.receiptModel.updateOne({ _id: receipt._id }, {
            deletedBy: {
                _id: user._id,
                email: user.email
            }
        });
        return this.receiptModel.softDelete({
            _id: id
        });
    }
    async confirmPayment(receiptId, user) {
        const receipt = await this.findOne(receiptId);
        const productIds = receipt.items.map((item) => { return item.product._id.toString(); });
        if (receipt.statusUser !== schema_enum_1.RECEIPT_STATUS.DELIVERED) {
            await this.userService.updatePurchasedProducts(receipt.user, productIds, receipt.total / 10);
            await this.inventoryProductService.updateReceiptUser(receipt.items, user);
            receipt.statusSupplier = schema_enum_1.RECEIPT_STATUS.DELIVERED;
            receipt.statusUser = schema_enum_1.RECEIPT_STATUS.DELIVERED;
            await receipt.save();
            return receipt;
        }
        return receipt;
    }
    async activeCoupons(checkValidCoupon, receiptId, user, active = true) {
        const coupon = await this.couponService.checkValidCoupon(checkValidCoupon, user, active);
        if (coupon) {
            const receipt = await this.receiptModel.findOne({ _id: receiptId });
            if (coupon.quantity === 0) {
                throw new common_1.BadRequestException(` Coupon đã hết `);
            }
            if (receipt) {
                if (active && !receipt.coupons.includes(checkValidCoupon.code)) {
                    receipt.coupons.push(checkValidCoupon.code);
                    await receipt.save();
                }
                else if (!active && receipt.coupons.includes(checkValidCoupon.code)) {
                    receipt.coupons = receipt.coupons.filter(coupon => coupon !== checkValidCoupon.code);
                    await receipt.save();
                }
                coupon.quantity -= 1;
                await coupon.save();
                await receipt.save();
                console.log("🚀 ~ ReceiptsService ~ activeCoupons ~ receipt:", receipt);
                return receipt;
            }
            else {
                throw new common_1.NotFoundException(` Không tìm thấy hóa đơn Id ${receiptId} `);
            }
        }
        else {
            throw new common_1.NotFoundException(` Không tìm thấy hóa đơn Id ${receiptId} `);
        }
    }
    async findByStatus(user, statusUser, statusSupplier) {
        const result = await this.receiptModel.find({ user: user._id, statusUser: statusUser, statusSupplier: statusSupplier }).select(['total']).exec();
        return result;
    }
    async getCashFlow(user) {
        const confirmReceipt = await this.findByStatus(user, schema_enum_1.RECEIPT_STATUS.UNCONFIRMED, schema_enum_1.RECEIPT_STATUS.UNCONFIRMED);
        const totalConfirmReceipt = confirmReceipt.reduce((sum, item) => sum + item.total, 0);
        const onDeliveryReceipt = await this.findByStatus(user, schema_enum_1.RECEIPT_STATUS.CONFIRMED, schema_enum_1.RECEIPT_STATUS.ON_DELIVERY);
        const totalOnDeliveryReceipt = onDeliveryReceipt.reduce((sum, item) => sum + item.total, 0);
        const deliveredReceipt = await this.findByStatus(user, schema_enum_1.RECEIPT_STATUS.CONFIRMED, schema_enum_1.RECEIPT_STATUS.DELIVERED);
        const totalDeliveredReceipt = deliveredReceipt.reduce((sum, item) => sum + item.total, 0);
        return {
            totalConfirmReceipt, totalOnDeliveryReceipt, totalDeliveredReceipt
        };
    }
    async returnReceipt(receiptId, user) {
        const receipt = await this.receiptModel.findOne({ _id: receiptId, user: user._id });
        if (receipt) {
            if (receipt.statusUser === schema_enum_1.RECEIPT_STATUS.UNCONFIRMED && receipt.statusSupplier === schema_enum_1.RECEIPT_STATUS.UNCONFIRMED) {
                receipt.statusUser = schema_enum_1.RECEIPT_STATUS.CANCEL;
                receipt.statusSupplier = schema_enum_1.RECEIPT_STATUS.CANCEL;
                await receipt.save();
                return receipt;
            }
            else {
                throw new common_1.BadRequestException(` Đơn hàng hóa đơn Id ${receiptId} đã xác nhận, không thể hủy được, vui lòng liên hệ shop hoặc admin để hủy đơn hàng`);
            }
        }
        else {
            throw new common_1.NotFoundException(` Không tìm thấy hóa đơn Id ${receiptId} `);
        }
    }
    async generatePaymentUrl(paymentUrlDto) {
        const params = {
            vnp_TxnRef: paymentUrlDto.orderId,
            vnp_IpAddr: "1.1.1.1",
            vnp_Amount: paymentUrlDto.total,
            vnp_OrderInfo: 'Payment for order ' + paymentUrlDto.orderId,
            vnp_OrderType: vnpay_1.ProductCode.Fashion,
            vnp_Locale: vnpay_1.VnpLocale.VN,
            vnp_ReturnUrl: process.env.VNP_RETURNURL,
        };
        return this.vnpay.buildPaymentUrl(params);
    }
    validatePaymentCallback(query) {
        return this.vnpay.verifyIpnCall({ ...query });
    }
    async confirmPaid(orderId) {
        const result = await this.receiptModel.findOne({ _id: orderId });
        if (!result)
            throw new common_1.NotFoundException("Order not found.");
        result.isCheckout = true;
        await result.save();
        return result;
    }
};
exports.ReceiptsService = ReceiptsService;
exports.ReceiptsService = ReceiptsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(receipt_schemas_1.Receipt.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => products_service_1.ProductsService))),
    __param(7, (0, mongoose_1.InjectModel)(coupon_schemas_1.Coupon.name)),
    __metadata("design:paramtypes", [Object, products_service_1.ProductsService,
        carts_service_1.CartsService,
        users_service_1.UsersService,
        inventory_product_service_1.InventoryProductService,
        coupons_service_1.CouponsService,
        address_user_service_1.AddressUserService, Object])
], ReceiptsService);
//# sourceMappingURL=receipts.service.js.map