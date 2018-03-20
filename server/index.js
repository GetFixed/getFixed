const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const multer = require('multer');
const settings = require('./../config/.cloudinary.js');
let db = require('./config/index.js');



const app = express();

const PORT = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/', routes);
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
cloudinary.config(settings);

app.post('/api/cloudinaryUpload', upload.single('problemImage'), (req, res) => {
  cloudinary.uploader.upload_stream(result => {
    res.status(200).send(result);
  }).end(req.file.buffer);
});

app.post('/api/problemUpload', (req, res) => {
  //call some database function
  console.log('you got back here');
  res.send('You got into the server heres your response');
})

db.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
  });
});

