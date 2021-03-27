const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
//Load Condig
dotenv.config({ path: './config/config.env' });
// DB Config
connectDB();
// app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());
app.disable('etag');

// routes middleware
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// Serve Static assests if in production
if (process.env.NODE_ENV === 'production') {
  //set Static folder
  app.use(express.static('frontUI/client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'frontUI', 'client', 'build', 'index.html')
    );
  });
}
// port
const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
