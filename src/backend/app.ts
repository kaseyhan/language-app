import express, { Express, Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectionString from './config/secrets';
import connectApi from './routes/index';

dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri: string = process.env.MONGODB_URI || connectionString;
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully...');
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });

const router: Router = express.Router();

connectApi(app,router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});