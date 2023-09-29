// routes/upload.ts
import express from 'express';
import multer from 'multer';
import uploadController from '../controllers/upload';

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, '../client/public');
  },
  filename: function (_req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('file'), uploadController.uploadFile);

export default router;
