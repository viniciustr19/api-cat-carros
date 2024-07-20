import { z } from "zod";

export const carSchema = z.object({
    id: z.string().min(1),
    name:  z.string().min(1),
    description: z.string().nullable(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
});

export const carCreateSchema = carSchema.omit({ id: true });
export const carUpdateSchema = carCreateSchema.partial();

export type TCar = z.infer<typeof carSchema>;
export type TCarCreate = z.infer<typeof carCreateSchema>;
export type TCarUpdate = z.infer<typeof carUpdateSchema>;