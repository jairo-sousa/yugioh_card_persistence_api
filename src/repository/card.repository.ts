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
}

export { CardRepositoryPrisma };
