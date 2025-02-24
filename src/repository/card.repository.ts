import { prisma } from "../db/prismaClient";
import { Card, CardRepository } from "../interface/card";

class CardRepositoryPrisma implements CardRepository {
    async create(card: Card): Promise<Card | {}> {
        const { id } = card;

        const result = await prisma.card.create({
            data: {
                id,
            },
        });
        return result;
    }

    async read(id: string): Promise<Card | {}> {
        const result = await prisma.card.findUnique({
            where: {
                id,
            },
        });
        return result || {};
    }

    async readAll(): Promise<Card | {}> {
        const result = await prisma.card.findMany();
        return result || {};
    }

    async update(id: string, card: Card): Promise<Card | {}> {
        const result = await prisma.card.update({
            where: {
                id,
            },
            data: card,
        });

        return result;
    }

    async delete(id: string): Promise<Card | {}> {
        const result = await prisma.card.delete({
            where: {
                id,
            },
        });
        return result || {};
    }
}

export { CardRepositoryPrisma };
