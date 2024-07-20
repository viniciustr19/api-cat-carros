import { Router } from "express";
import { container } from "tsyringe";
import { CarServices } from "../services/car.services";
import { CarControllers } from "../controllers/car.controllers";
import { ValidateBody } from "../middleware/validateBody.middleware";
import { validateId } from "../middleware/validateId.middleware";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carControllers = container.resolve(CarControllers);

carRouter.post("/", ValidateBody.execute, carControllers.create);
carRouter.get("/", carControllers.findMany);
carRouter.get("/:id", validateId.execute,carControllers.findOne);
carRouter.patch("/:id", validateId.execute, ValidateBody.execute, carControllers.update);
carRouter.delete("/:id", validateId.execute, carControllers.delete);
