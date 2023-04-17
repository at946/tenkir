import { Deck } from '../interfaces/deck';

const fibonacci: Deck = {
  key: 'fibonacci',
  displayName: 'フィボナッチ数列',
  cards: [0, 1, 2, 3, 5, 8, 13, 21, '?'],
};

const sequential: Deck = {
  key: 'sequential',
  displayName: '0 - 10',
  cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '?'],
};

const tShirtSize: Deck = {
  key: 'tShirtSize',
  displayName: 'Tシャツサイズ',
  cards: ['XS', 'S', 'M', 'L', 'XL', '?'],
};

const Decks: Deck[] = [fibonacci, sequential, tShirtSize];

export default Decks;
