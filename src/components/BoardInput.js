import React from 'react';

const BoardInput = React.createClass({
  handleNewBoard: function(e) {
    e.preventDefault();
    this.props.onClick({
      title: this.refs.title.value,
      decks: this.props.decks
    });
    this.refs.title.value = '';
  },
  render: function () {
    return (
      <div className="board-form">
        <form onSubmit={this.handleNewBoard}>
          <input className="board-input" ref="title" type="text"
          placeholder="new board" />
        </form>
      </div>
    );
  },
});

export default BoardInput;
