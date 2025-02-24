import { Card, CardRepository } from "../interface/card";
import { CardRepositoryPrisma } from "../repository/card.repository";

class CardUsecase {
    private cardRepository: CardRepository;

    constructor() {
        this.cardRepository = new CardRepositoryPrisma();
    }

    async create(card: Card): Promise<Card | {}> {
        const { id } = card;

        const result = await this.cardRepository.create({ id });

        return result;
    }

    async read(id: string): Promise<Card | {}> {
        const result = await this.cardRepository.read(id);

        return result;
    }
}

export { CardUsecase };
