import { Request, Response } from 'express';
import path from 'path';

const uploadFile = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // File info
  const fileName = req.file.filename;
  const filePath = path.join(__dirname, '../client/public/', fileName);

  res.status(200).send({
    message: 'File uploaded successfully.',
    file: {
      name: fileName,
      path: filePath
    }
  });
};

export default { uploadFile };
