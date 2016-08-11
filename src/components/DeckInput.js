import React from 'react';

const DeckInput = React.createClass({
  handleNewDeck: function(e) {
    e.preventDefault();
    this.props.onClick({
      title: this.refs.title.value,
      board: this.props.boardID,
      cards: this.props.cards
    });
    this.refs.title.value = '';
  },
  render: function () {
    return (
      <div className="deck-form">
        <form onSubmit={this.handleNewDeck}>
          <input className="decks add" ref="title"
            type="text" placeholder="new deck" />
        </form>
      </div>
    );
  },
});

export default DeckInput;
