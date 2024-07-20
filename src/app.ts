import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import { HandleErrors } from "./middleware/handleErrors.middleware";
import { carRouter } from "./routes/car.routes";

export const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use("/cars", carRouter);

app.use(HandleErrors.execute);