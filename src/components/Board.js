import React from 'react';
import Deck from './Deck';
import DeckInput from './DeckInput';

const Board = React.createClass({
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
  },
  handleDeleteCard: function(args) {
    this.props.onDeleteCard(args);
  },
  handleNewDeck: function(args) {
    this.props.onDeckSubmit(args);
  },
  handleDeleteDeck: function(args) {
    this.props.onDeleteDeck(args);
  },
  handleDeleteBoard: function() {
    this.props.onDeleteBoard({
      id: this.props.id
    });
  },
  render: function() {
    const decks = this.props.decks.map((deck) => {
      return (
        <Deck
          key={deck.id}
          id={deck.id}
          boardID={this.props.id}
          title={deck.title}
          cards={deck.cards}
          onCardSubmit={this.handleNewCard}
          onDeleteCard={this.handleDeleteCard}
          onDeleteDeck={this.handleDeleteDeck}
        />
      );
    });
    return (
      <div className="boards">
        <span
        className="delete board-icon"
        onClick={this.handleDeleteBoard}
      >
        <div>X</div>
      </span>
        <h2>{this.props.title}</h2>
        <div className="decks-list">
          {decks}
          <DeckInput
            onClick={this.handleNewDeck}
            boardID={this.props.id}
            cards={[]}
          />
        </div>
      </div>
    );
  },
});

export default Board;
