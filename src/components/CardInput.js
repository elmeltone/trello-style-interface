import React from 'react';

const CardInput = React.createClass({
  handleNewCard: function(e) {
    e.preventDefault();
    this.props.onClick({
      title: this.refs.title.value,
      board: this.props.boardID,
      deck: this.props.deckID
    });
    this.refs.title.value = '';
  },
  render: function () {
    return (
      <div className="card-form">
        <form onSubmit={this.handleNewCard}>
          <input className="card-input" ref="title" type="text"
          placeholder="new card" />
        </form>
      </div>
    );
  },
});

export default CardInput;
