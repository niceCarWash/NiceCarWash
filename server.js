const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

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

// routes middleware
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// port
const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
