import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class validateId {
    static async execute(req: Request, res: Response, next: NextFunction) {
       try {
          const params = req.params.id;
 
          const search = await prisma.car.findFirst({ where: { id: params } });
 
          if (!search) {
             return res.status(404).json({ message: 'Car not found' });
          }
 
          next();
       } catch (error) {
          return res.status(500).json(error);
       }
    }
}