import React from 'react';
import { Link } from 'react-router';


const Icon = React.createClass({
  handleDeleteBoard: function() {
    this.props.onDeleteBoard({
      id: this.props.id,
      board: this.props.boardID
    });
  },
  render: function () {
    return (
      <div className="icons">
        <Link to={this.props.title}>
          <span
            className="delete board-icon"
            onClick={this.handleDeleteBoard}
          >
            <div>x</div>
          </span>
          {this.props.title}
        </Link>
      </div>
    );
  },
});

export default Icon;
