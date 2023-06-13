import { Card } from "./card";

export class Cards {
  constructor(
    private cards: Card[] = [],
  ) {}

  toArray(): Card[] {
    return this.cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  private getNumberCards(): Card[] | undefined {
    return this.cards.filter((card: Card) => card.isNumberCard());
  }
  
  private getNumberCardsValues(): number[] {
    return this.getNumberCards()?.map((card: Card) => card.getValue());
  }

  findCardByPlayerId(playerId: string): Card {
    return this.cards.find((card) => card.getPlayerId() === playerId);
  }

  areNumberCardsExist(): boolean {
    return this.getNumberCards() !== undefined;
  };

  areNonBlankCardsExist(): boolean {
    return !!this.cards.filter((card: Card) => !card.isBlank())
  }

  getMax(): number {
    return Math.max(...this.getNumberCardsValues());
  }

  getMin(): number {
    return Math.min(...this.getNumberCardsValues());
  }

  getAverage(): number {
    const numberCardsValues: number[] = this.getNumberCardsValues();
    return numberCardsValues.reduce((a, b) => a + b) / numberCardsValues.length;
  }
}