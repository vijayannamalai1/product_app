const multer = require('multer');
const path = require('path');

// Configure multer to include the file extension
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // Get the file extension
    cb(null, Date.now() + ext); // Append the extension to the file name
  }
});

const upload = multer({ storage: storage });

module.exports = upload;