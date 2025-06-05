"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosineSimilarity = cosineSimilarity;
function cosineSimilarity(vecA, vecB) {
    if (!Array.isArray(vecA) ||
        !Array.isArray(vecB) ||
        vecA.length === 0 ||
        vecB.length === 0 ||
        vecA.length !== vecB.length) {
        return -1;
    }
    const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
    if (magnitudeA === 0 || magnitudeB === 0) {
        return -1;
    }
    return dotProduct / (magnitudeA * magnitudeB);
}
//# sourceMappingURL=cosine.js.map