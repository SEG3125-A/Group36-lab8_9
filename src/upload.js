const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // File name
    }
});

// Multer upload configuration
const upload = multer({ storage: storage });

// Handle POST request for file upload
// Handle POST request for file upload
app.post('/upload', upload.single('imageFile'), (req, res) => {
    // Log uploaded data
    console.log('Uploaded Data:', req.body);

    // File uploaded successfully
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

