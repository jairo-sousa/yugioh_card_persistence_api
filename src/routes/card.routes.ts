import { FastifyInstance } from "fastify";
import { CardUsecase } from "../usecase/card.usecase";
import { Card } from "@prisma/client";

export async function cardRoutes(fastify: FastifyInstance) {
    const cardUsecase = new CardUsecase();

    fastify.post<{ Body: Card }>("/", async (req, reply) => {
        const { id } = req.body;

        try {
            const data = await cardUsecase.create({
                id,
            });

            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });
}
