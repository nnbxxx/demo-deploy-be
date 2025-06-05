import mongoose from "mongoose";
export declare class CreateReviewDto {
    userId: mongoose.Schema.Types.ObjectId;
    productId: mongoose.Schema.Types.ObjectId;
    fileUrl?: string[];
    rating: number;
    comment: string;
}
