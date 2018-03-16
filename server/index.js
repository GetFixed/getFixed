const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

let PORT = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/', routes);

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});