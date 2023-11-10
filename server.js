const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_CONNECTION.replace(
  '%PASSWORD%',
  process.env.DB_PASSWORD
);

const connection = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected! 🐧'));

app.listen(3000, () => console.log('Server Started!'));
