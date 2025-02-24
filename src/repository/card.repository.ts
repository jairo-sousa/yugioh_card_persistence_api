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
}

export { CardRepositoryPrisma };
