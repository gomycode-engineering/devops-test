const express = require('express');
const connectDB = require('./config/dbConnect');
const user = require('./Routes/user');

const connectDb = require('./config/dbConnect');

const app = express();
app.use(express.json());

app.use('/user', user);
connectDb();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(` 🚀 is 🏃  on PORT ${PORT}`)
);
