export interface Card {
    id: string;
}

export interface CardRepository {
    create(card: Card): Promise<Card | {}>;
    read(id: string): Promise<Card | {}>;
}
