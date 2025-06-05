import { FilesService } from './files.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class FilesController {
    private readonly filesService;
    private cloudinaryService;
    constructor(filesService: FilesService, cloudinaryService: CloudinaryService);
    uploadFile(file: Express.Multer.File): Promise<any>;
    uploadFiles(files: Express.Multer.File[]): Promise<string[]>;
}
