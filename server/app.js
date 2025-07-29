import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import connectDB from './config/db.js';
import todoRoutes from "./routes/todo.routes.js"


const app = express();
dotenv.config({ path: "./.env" });
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todos", todoRoutes);

connectDB();

export default app;