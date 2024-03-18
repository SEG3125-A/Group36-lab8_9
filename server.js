const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port =  process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve your CSS files and Bootstrap from 'public' directory
app.set('view engine', 'ejs'); // Set EJS as the template engine

// Serve main page
app.get('/artivisio', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Process survey form submission
app.post('/api/data', (req, res) => {
  const artwork = req.body;

  // Read existing survey analytics
  fs.readFile(__dirname + '/src/gallery.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading gallery.JSON:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let artworks;

    try {
      artworks = JSON.parse(data) || [];
      if (!Array.isArray(artworks)) {
        throw new Error('Parsed data is not an array');
      }
    } catch (parseError) {
      console.error('Error parsing existing results JSON:', parseError);
      artworks = [];
    }

    // Append new survey data
    artworks.push(artwork);

    // Save updated survey results to the analytics file
    fs.writeFile('gallery.json', JSON.stringify(artworks), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to JSON file:', writeErr);
        res.status(500).send('Internal Server Error');
        return;
      }

      console.log('Artwork data saved.');

    });

  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
