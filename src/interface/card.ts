export interface Card {
    id: string;
}

export interface CardRepository {
    create(card: Card): Promise<Card | {}>;
    read(id: string): Promise<Card | {}>;
    readAll(): Promise<Card | {}>;
    update(id: string, card: Card): Promise<Card | {}>;
    delete(id: string): Promise<Card | {}>;
}
