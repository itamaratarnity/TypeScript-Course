import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const id = Date.now().toString();
    const ext = path.extname(file.originalname);
    cb(null, `${id}${ext}`);
  }
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  const id = path.parse(req.file.filename).name;

  res.json({
    message: 'File uploaded successfully',
    id,
    filename: req.file.filename
  });
});

router.get('/files/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const uploadsDir = path.resolve('uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) return res.status(500).send('Server error');

    const fileName = files.find(f => path.parse(f).name === id);
    if (!fileName) return res.status(404).send('File not found');

    const filePath = path.join(uploadsDir, fileName);
    res.sendFile(filePath);
  });
});

export default router;
