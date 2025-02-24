export interface Card {
    id: string;
}

export interface CardRepository {
    create(card: Card): Promise<Card | {}>;
}
