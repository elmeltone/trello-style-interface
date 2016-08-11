import React from 'react';
import Board from './Board';
import BoardInput from './BoardInput';

const BoardList = React.createClass({
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
  handleNewBoard: function(args) {
    this.props.onBoardSubmit(args);
  },
  handleDeleteBoard: function(args) {
    this.props.onDeleteBoard(args);
  },
  render: function() {
    const boards = this.props.boards.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          decks={board.decks}
          onCardSubmit={this.handleNewCard}
          onDeleteCard={this.handleDeleteCard}
          onDeckSubmit={this.handleNewDeck}
          onDeleteDeck={this.handleDeleteDeck}
          onDeleteBoard={this.handleDeleteBoard}
        />
      );
    });
    return (
      <div>
        {boards}
          <BoardInput
            onClick={this.handleNewBoard}
            decks={[]}
          />
      </div>
    );
  },
});

export default BoardList;
