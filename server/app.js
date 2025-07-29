import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import connectDB from './config/db.js';


const app = express();
dotenv.config({ path: "./.env" });
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectDB();

export default app;