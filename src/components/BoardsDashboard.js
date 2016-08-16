import React from 'react';

import guid from '../utils/guid';
import boards from '../utils/boards';
import BoardList from './BoardList';

const BoardsDashboard = React.createClass({
  getInitialState: function() {
    return boards;
  },
  handleNewCard: function(args) {
    console.log(args);
    function newCard(title) {
      const card = {
        text: title,
        id: guid(),
      };
      return card;
    };
    const c = newCard(args.title);
    let boards = this.state.boards;
    let board = 0;
    let deck = 0;
        for (var i = 0; i < boards.length; i++) {
          if (boards[i].id == args.board) {
            board = i;
          };
          for (var j = 0; j < boards[i].decks.length; j++) {
            if (boards[i].decks[j].id == args.deck) {
              deck = j;
            }
          }
        }
    boards[board].decks[deck].cards.push(c);
    this.setState({
      boards: boards,
    });
  },
  handleDeleteCard: function(args) {
    console.log(args);
    const c = args.id;
    let boards = this.state.boards;
    let board = 0;
    let deck = 0;
    let card = 0;
        for (var i = 0; i < boards.length; i++) {
          if (boards[i].id == args.board) {
            board = i;
          };
          for (var j = 0; j < boards[i].decks.length; j++) {
            if (boards[i].decks[j].id == args.deck) {
              deck = j;
            };
            for (var k = 0; k < boards[i].decks[j].cards.length; k++) {
              if (boards[i].decks[j].cards[k].id == args.id) {
                card = k;
              };
            }
          }
        }
    boards[board].decks[deck].cards.splice(card, 1);
    this.setState({
      boards: boards,
    });
  },
  handleNewDeck: function(args) {
    console.log(args);
    function newDeck(opts) {
      const deck = {
        title: opts.title,
        id: guid(),
        cards: opts.cards
      };
      return deck;
    };
    const d = newDeck(args);
    let boards = this.state.boards;
    let board = 0;
        for (var i = 0; i < boards.length; i++) {
          if (boards[i].id == args.board) {
            board = i;
          }
        }
    boards[board].decks.push(d);
    this.setState({
      boards: boards,
    });
  },
  handleDeleteDeck: function(args) {
    console.log(args);
    const d = args.id;
    let boards = this.state.boards;
    let board = 0;
    let deck = 0;
        for (var i = 0; i < boards.length; i++) {
          if (boards[i].id == args.board) {
            board = i;
          };
          for (var j = 0; j < boards[i].decks.length; j++) {
            if (boards[i].decks[j].id == args.id) {
              deck = j;
            };
          }
        }
    boards[board].decks.splice(deck, 1);
    this.setState({
      boards: boards,
    });
  },
  handleNewBoard: function(args) {
    console.log(args);
    function newBoard(opts) {
      const board = {
        title: opts.title,
        id: guid(),
        decks: opts.decks
      };
      return board;
    };
    const b = newBoard(args);
    let boards = this.state.boards;
    boards.push(b);
    this.setState({
      boards: boards,
    });
  },
  handleDeleteBoard: function(data) {
    console.log(data);
    const b = data;
    let boards = this.state.boards;
    let board = 0;
        for (var i = 0; i < boards.length; i++) {
          if (boards[i].id == data) {
            board = i;
          };
        }
    boards.splice(board, 1);
    this.setState({
      boards: boards,
    });
  },
  render: function() {
    const board = (typeof this.props.params.board === "undefined") ? 0 : this.props.params.board;
    return (
      <div className="dashboard">
        <BoardList
          boards={this.state.boards[board]}
          onCardSubmit={this.handleNewCard}
          onDeleteCard={this.handleDeleteCard}
          onDeckSubmit={this.handleNewDeck}
          onDeleteDeck={this.handleDeleteDeck}
          onBoardSubmit={this.handleNewBoard}
          onDeleteBoard={this.handleDeleteBoard}
        />
      </div>
    );
  },
});

export default BoardsDashboard;
