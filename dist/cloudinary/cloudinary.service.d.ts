import { CloudinaryResponse } from "./cloudinary-response";
export declare class CloudinaryService {
    uploadFile(file: Express.Multer.File, folder: string): Promise<CloudinaryResponse>;
    uploadMultipleFile(files: Express.Multer.File[], folder: string): Promise<string[]>;
    destroy(publicId: string): Promise<CloudinaryResponse>;
    deleteImageOnCloud(url: string): Promise<void>;
}
