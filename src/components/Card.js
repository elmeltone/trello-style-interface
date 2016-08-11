import React from 'react';

const Card = React.createClass({
  handleDeleteCard: function() {
    this.props.onDeleteCard({
      id: this.props.id,
      board: this.props.boardID,
      deck: this.props.deckID
    });
  },
  render: function () {
    return (
      <div className="cards">
        <span
          className="delete card-icon"
          onClick={this.handleDeleteCard}
        >
          <div>x</div>
        </span>
        {this.props.text}
      </div>
    );
  },
});

export default Card;
