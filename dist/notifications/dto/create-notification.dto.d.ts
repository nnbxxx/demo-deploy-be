import mongoose from "mongoose";
export declare class CreateNotificationDto {
    userId: mongoose.Schema.Types.ObjectId;
    title: string;
    message: string;
    navigate: string;
}
