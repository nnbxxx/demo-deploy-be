"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderOrderCancelDueToAdmin = exports.renderOrderCancelDueToUser = exports.renderOrderCancelDueToExpiration = void 0;
const renderOrderCancelDueToExpiration = (orderId) => {
    return `Your order with code "${orderId}" has been cancelled. Because online payment on VNPay is overdue.`;
};
exports.renderOrderCancelDueToExpiration = renderOrderCancelDueToExpiration;
const renderOrderCancelDueToUser = (orderId) => {
    return `Your order with code "${orderId}" has been successfully canceled.`;
};
exports.renderOrderCancelDueToUser = renderOrderCancelDueToUser;
const renderOrderCancelDueToAdmin = (orderId) => {
    return `Your order with code "${orderId}" has been cancelled. For some reason by Admin`;
};
exports.renderOrderCancelDueToAdmin = renderOrderCancelDueToAdmin;
//# sourceMappingURL=messageReceipts.js.map