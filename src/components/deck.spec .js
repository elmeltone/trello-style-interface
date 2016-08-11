import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Deck from './Deck';

describe ('Deck component', () => {

  it('should render a Deck component', () => {
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

    const renderer = TestUtils.createRenderer();
    renderer.render(<Deck id={deckId} cards={Deck.cards} />);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});
