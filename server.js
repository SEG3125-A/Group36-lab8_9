const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Required for optional image deletion

const app = express();
const port = process.env.PORT || 3000;

// Storage configuration for Multer
const upload = multer({
  dest: 'uploads/', // Define the directory to store uploaded images
  limits: { fileSize: 1000000 }, // Limit file size to 1MB (adjust as needed)
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type.'));
    }
  },
});

// Endpoint for uploading image
app.post('/api/data', upload.single('imageFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file uploaded.' });
    }

    const { title, artist, description, price } = req.body; // Access other form data

    // Generate a unique filename if needed (optional)
    const filename = req.file.filename; // Use the generated filename

    // Store additional artwork data in a database or file (optional)

    res.status(201).json({ message: 'Artwork created successfully!', image: filename }); // Return success message and filename
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating artwork.' });
  }
});

// Endpoint for retrieving an image (optional)
app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  // Validate filename and check for existence before serving
  if (!filename || !fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Image not found.' });
  }

  // Set appropriate content type (adjust based on image format)
  res.setHeader('Content-Type', 'image/jpeg'); // Example for JPEG images

  fs.createReadStream(filePath).pipe(res); // Stream the image data to the response
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});