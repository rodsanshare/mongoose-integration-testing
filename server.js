const mongoose = require("mongoose");
require('dotenv/config');
const mongoDB = process.env.DB;
const fetch = require("node-fetch");
mongoose.connect(mongoDB);
const app = require('./src/app');

app.listen(3000);