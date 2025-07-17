import express from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  // Allow images and videos
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image and video files are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760') // 10MB default
  }
});

// @desc    Upload single file
// @route   POST /api/upload/single
// @access  Private
router.post('/single', authenticate, upload.single('file'), async (req: AuthRequest, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    let processedFile = req.file;

    // Process image files
    if (req.file.mimetype.startsWith('image/')) {
      const outputPath = `uploads/processed-${req.file.filename}`;
      
      await sharp(req.file.path)
        .resize(800, 600, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85 })
        .toFile(outputPath);

      processedFile = {
        ...req.file,
        path: outputPath,
        filename: `processed-${req.file.filename}`
      };
    }

    res.json({
      success: true,
      data: {
        filename: processedFile.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        url: `/uploads/${processedFile.filename}`
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'File upload failed'
    });
  }
});

// @desc    Upload multiple files
// @route   POST /api/upload/multiple
// @access  Private
router.post('/multiple', authenticate, upload.array('files', 5), async (req: AuthRequest, res) => {
  try {
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No files uploaded'
      });
    }

    const files = req.files as Express.Multer.File[];
    const processedFiles = [];

    for (const file of files) {
      let processedFile = file;

      // Process image files
      if (file.mimetype.startsWith('image/')) {
        const outputPath = `uploads/processed-${file.filename}`;
        
        await sharp(file.path)
          .resize(800, 600, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .jpeg({ quality: 85 })
          .toFile(outputPath);

        processedFile = {
          ...file,
          path: outputPath,
          filename: `processed-${file.filename}`
        };
      }

      processedFiles.push({
        filename: processedFile.filename,
        originalName: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        url: `/uploads/${processedFile.filename}`
      });
    }

    res.json({
      success: true,
      data: processedFiles
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'File upload failed'
    });
  }
});

export default router;
