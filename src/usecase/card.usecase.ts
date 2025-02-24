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

    async readAll(): Promise<Card | {}> {
        const result = await this.cardRepository.readAll();

        return result;
    }

    async update(id: string, card: Card): Promise<Card | {}> {
        const result = await this.cardRepository.update(id, card);

        return result;
    }

    async delete(id: string): Promise<Card | {}> {
        const result = await this.cardRepository.delete(id);

        return result;
    }
}

export { CardUsecase };
