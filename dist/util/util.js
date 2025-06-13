"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeRangeFromDate = getTimeRangeFromDate;
exports.cosineSimilarity = cosineSimilarity;
const schema_enum_1 = require("../constants/schema.enum");
function getTimeRangeFromDate(type, to = new Date()) {
    const toDate = new Date(to);
    toDate.setHours(23, 59, 59, 999);
    const from = new Date(toDate);
    switch (type) {
        case schema_enum_1.TYPE_TIME_FILTER.DAY:
            from.setDate(from.getDate() - 1);
            break;
        case schema_enum_1.TYPE_TIME_FILTER.WEEK:
            from.setDate(from.getDate() - 7);
            break;
        case schema_enum_1.TYPE_TIME_FILTER.MONTH:
            from.setMonth(from.getMonth() - 1);
            break;
        case schema_enum_1.TYPE_TIME_FILTER.YEAR:
            from.setFullYear(from.getFullYear() - 1);
            break;
        default:
            throw new Error('Invalid time filter type');
    }
    from.setHours(0, 0, 0, 0);
    return { from, to: toDate };
}
function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}
//# sourceMappingURL=util.js.map