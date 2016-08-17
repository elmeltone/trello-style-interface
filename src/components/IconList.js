import React from 'react';

import guid from '../utils/guid';
import boards from '../utils/boards';
import Icon from './Icon';

const IconList = React.createClass({
  getInitialState: function() {
    return boards;
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
    const boards = this.props.boards.map((board) => {
      return (
        <Icon
          key={board.id}
          id={board.id}
          title={board.title}
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

export default IconList;
