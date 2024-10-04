import  multer from 'multer';
import path from  'path';

// Multer configuration
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
  }
});

// File filter to allow only image related file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png)'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },  ///file size limit is 10MB
  fileFilter
});

export default upload;