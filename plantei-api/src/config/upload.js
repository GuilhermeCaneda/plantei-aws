// arquivo de configuração da imagem 

import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    storage: multer.diskStorage({
        // destination: path.resolve(__dirname, '../../uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            const timestamp = new Date().getTime()

            cb(null, `${name}-${timestamp}${ext}`);
        }
    })
};
