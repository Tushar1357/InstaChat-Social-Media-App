const express = require('express');
const { create_post } = require('../controllers/post');
const middleware = require('../auth_middleware/middleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const imageDirectory = path.join(__dirname, '../images');


const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, imageDirectory);
  },
  filename: async (req, file, cb) => {
    const image_name = Date.now();
    const ext = path.extname(file.originalname);
    const fileName = `${image_name}${ext}`;
    cb(null, fileName);
  }
});

const upload = multer({
  storage: storage,
  // limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  // fileFilter: (req, file, cb) => {
  //   const filetypes = /jpeg|jpg|png|gif/;
  //   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //   const mimetype = filetypes.test(file.mimetype);
    
  //   if (extname && mimetype) {
  //     return cb(null, true);
  //   } else {
  //     cb(new Error('Only images (jpeg, jpg, png, gif) are allowed'));
  //   }
  // }
});

router.post('/post', middleware, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ status: false, message: 'No image file provided' });
    }

    const imagePath = `/images/${req.file.filename}`;
    const details = req.body;
    details['email'] = req.email;
    details['imagePath'] = imagePath;

    const postCreated = await create_post(details);
    if (postCreated) {
      res.send({ status: true, message: "Post has been successfully added" });
    } else {
      res.send({ status: false, message: "An error occurred, please try again!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: "Server error. Please try again later." });
  }
});

module.exports = router;
