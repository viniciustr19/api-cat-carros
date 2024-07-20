import { inject, injectable } from "tsyringe";
import { CarServices } from "../services/car.services";
import { Request, Response } from "express";

@injectable()
export class CarControllers{
    constructor(@inject("CarServices") private carServices: CarServices) {}

    async create(req: Request, res: Response){
        const response = await this.carServices.create(req.body);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response){
        const description = req.query.description as string | undefined;
        const response = await this.carServices.findMany(description);
        return res.status(200).json(response);
    }

    async findOne(req: Request, res: Response){
        const response = await this.carServices.findOne(req.params.id);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response){
        const response = await this.carServices.update(req.params.id, req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response){
        const params = req.params.id;
        const car = await this.carServices.delete(params);

        return res.status(204).json(car);
    }
}