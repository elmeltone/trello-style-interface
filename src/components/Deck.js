import React from 'react';
import Card from './Card';
import CardInput from './CardInput';

const Deck = React.createClass({
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
  },
  handleDeleteCard: function(args) {
    this.props.onDeleteCard(args);
  },
  handleDeleteDeck: function() {
    this.props.onDeleteDeck({
      id: this.props.id,
      board: this.props.boardID
    });
  },
  render: function() {
    const cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          boardID={this.props.boardID}
          deckID={this.props.id}
          onDeleteCard={this.handleDeleteCard}
        />
      );
    });
    return (
      <div className="decks">
        <span
        className="delete deck-icon"
        onClick={this.handleDeleteDeck}
        >
          <div>X</div>
        </span>
        <h3>{this.props.title}</h3>
        {cards}
        <CardInput
          boardID={this.props.boardID}
          deckID={this.props.id}
          onClick={this.handleNewCard}
        />
      </div>
    );
  },
});

export default Deck;
