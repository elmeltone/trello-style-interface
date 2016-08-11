import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Board from './Board';

describe ('Board component', () => {

  it('should render a Board component', () => {
    const boardId = 'id of a rendered board';
    const deckId = 'id of a rendered deck';
    const cardId = 'id of a rendered card';
    const cardText = 'text area of a rendered card';

    const Card = {
        id: cardId,
        text: cardText
      };
    const Deck = {
        id: deckId,
        cards: [Card]
      };
    const Boards = {
        id: boardId,
        decks: [Deck]
      };

    const renderer = TestUtils.createRenderer();
    renderer.render(<Board id={boardId} decks={Boards.decks} />);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});
