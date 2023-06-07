import { Meta, StoryObj } from '@storybook/react';

import HandsCards from './HandsCards';
import { Provider } from 'react-redux';
import { mockState, mockStore } from '@/store/mocks/store';

const meta: Meta<typeof HandsCards> = {
  component: HandsCards,
  title: 'Room/Hands/HandsCards',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HandsCards>;

const mockStateOfFibonacci = { ...mockState, room: { cardsAreOpen: false, deckType: 'fibonacci' } };
export const Fibonacci: Story = {
  args: {},
  decorators: [(story) => <Provider store={mockStore(mockStateOfFibonacci)}>{story()}</Provider>],
};

const mockStateOfSequential = {
  ...mockState,
  room: { cardsAreOpen: false, deckType: 'sequential' },
};
export const Sequential: Story = {
  args: {},
  decorators: [(story) => <Provider store={mockStore(mockStateOfSequential)}>{story()}</Provider>],
};

const mockStateOfTShirtSize = {
  ...mockState,
  room: { cardsAreOpen: false, deckType: 'tShirtSize' },
};
export const TShirtSize: Story = {
  args: {},
  decorators: [(story) => <Provider store={mockStore(mockStateOfTShirtSize)}>{story()}</Provider>],
};