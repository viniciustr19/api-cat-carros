import { injectable } from "tsyringe";
import { TCar, TCarCreate, TCarUpdate } from "../schemas/car.schema";
import { prisma } from "../database/prisma";

@injectable()
export class CarServices{
    async create(body: TCarCreate) {
        const data = await prisma.car.create({ data: body});

        return data;
    }

    async findMany(description?: string): Promise<TCar[]> {
        const data = await prisma.car.findMany();
        
        return data;
    }

    async findOne(id: string, description?: string): Promise<TCar | null> {
        const data = await prisma.car.findFirst({ where: { id }});

        return data;
    }

    async update(id: string, body: TCarUpdate): Promise<TCar> {
        const data = await prisma.car.update({ where: { id }, data: body });

        return data;
    }

    async delete(id: string): Promise<void>{
        await prisma.car.delete({ where: { id }});
    }
}