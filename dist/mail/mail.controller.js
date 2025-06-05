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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const customize_1 = require("../decorator/customize");
const mailer_1 = require("@nestjs-modules/mailer");
const swagger_1 = require("@nestjs/swagger");
let MailController = class MailController {
    constructor(mailService, mailerService) {
        this.mailService = mailService;
        this.mailerService = mailerService;
    }
    async handleTestEmail() {
        await this.mailerService.sendMail({
            to: "uyenbao4a5@gmail.com",
            from: '"Support Team" <support@example.com>',
            subject: 'Welcome to Nice App! Confirm your Email',
            template: "register",
            context: {
                name: "nnb",
                activationCode: "123456"
            }
        });
    }
};
exports.MailController = MailController;
__decorate([
    (0, common_1.Get)(),
    (0, customize_1.Public)(),
    (0, customize_1.ResponseMessage)("Test email"),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MailController.prototype, "handleTestEmail", null);
exports.MailController = MailController = __decorate([
    (0, swagger_1.ApiTags)('mail'),
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [mail_service_1.MailService,
        mailer_1.MailerService])
], MailController);
//# sourceMappingURL=mail.controller.js.map