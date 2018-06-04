const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/my_database";
const fetch = require("node-fetch");
mongoose.connect(mongoDB);
const app = require('./src/app');

app.listen(3000);