"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
async function paginate(model, { currentPage = 1, limit = 100, query, sort, selectFields, population, }) {
    const currentPageNumber = +currentPage;
    const limitNumber = +limit;
    const offset = (currentPageNumber - 1) * limitNumber;
    const totalItems = await model.countDocuments(query).exec();
    const totalPages = Math.ceil(totalItems / limitNumber);
    const result = await model
        .find(query)
        .skip(offset)
        .limit(limitNumber)
        .sort(sort)
        .select(selectFields)
        .populate(population)
        .exec();
    return {
        meta: {
            current: currentPageNumber,
            pageSize: limitNumber,
            pages: totalPages,
            total: totalItems,
        },
        result,
    };
}
//# sourceMappingURL=pagination.js.map