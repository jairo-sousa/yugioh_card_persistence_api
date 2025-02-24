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

    fastify.get<{ Params: { id: string } }>("/:id", async (req, reply) => {
        const { id } = req.params;

        try {
            const data = await cardUsecase.read(id);

            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.get("/", async (req, reply) => {
        try {
            const data = await cardUsecase.readAll();

            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.put<{ Params: { id: string }; Body: Card }>(
        "/:id",
        async (req, reply) => {
            const { id } = req.params;
            const card = req.body;
            try {
                const data = await cardUsecase.update(id, card);

                return reply.send(data);
            } catch (error) {
                reply.send(error);
            }
        }
    );

    fastify.delete<{ Params: { id: string } }>("/:id", async (req, reply) => {
        const { id } = req.params;

        try {
            const data = await cardUsecase.delete(id);

            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });
}
