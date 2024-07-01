// src/server.ts

import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import db from "@/utils/database";
import routes from "@/routes";
import bodyParser from "body-parser";

const app = express();
const BASE_URL = "localhost";
const PORT = process.env.PORT || 3000;

db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Sanbercode REST API Server",
    data: "Created by: Muhammad Ridwan Hakim",
  });
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://${BASE_URL}:${PORT}`);
});
