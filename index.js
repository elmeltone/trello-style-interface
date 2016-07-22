const Card = React.createClass({
  render: function () {
    return (
      <div className="cards">
        {this.props.text}
      </div>
    );
  },
});

const CardInput = React.createClass({
  render: function () {
    return (
      <div className="card-form">
        <input className="card-input" type="text"
        placeholder="add a card" />
        <input className="card-button" onClick={this.props.onClick}
         type="submit" value="+" />
      </div>
    );
  },
});

const Deck = React.createClass({
  handleNewCard: function(card) {
    this.props.onFormSubmit(card);
  },
  render: function() {
    const cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          text={card.text}
        />
      );
    });
    return (
      <div className="decks">
        <h3>{this.props.title}</h3>
        {cards}
        <CardInput
          onClick={this.handleNewCard}
        />
      </div>
    );
  },
});

const Board = React.createClass({
  handleDeckNewCard: function(card) {
    this.props.onSubmitCard(card);
  },
  render: function() {
    const decks = this.props.decks.map((deck) => {
      return (
        <Deck
          key={deck.id}
          title={deck.title}
          cards={deck.cards}
          onFormSubmit={this.handleDeckNewCard}
        />
      );
    });
    return (
      <div className="boards">
        <h2>{this.props.title}</h2>
        <div className="decks-list">
          {decks}
        </div>
      </div>
    );
  },
});

const BoardList = React.createClass({
  handleBoardNewCard: function(card) {
    this.props.onAddCard(card);
  },
  render: function() {
    const boards = this.props.boards.map((board) => {
      return (
        <Board
          key={board.id}
          title={board.title}
          decks={board.decks}
          onSubmitCard={this.handleBoardNewCard}
        />
      );
    });
    return (
      <div className="boards">
        {boards}
      </div>
    );
  },
});

const BoardsDashboard = React.createClass({
  getInitialState: function() {
    return {
      boards: [
        {
          title: "Board 1",
          id: 1,
          decks: [
            {
              title: "Deck 1",
              id: 1,
              cards: [
                {
                  text: "Card 1",
                  id: 2
                },
                {
                  text: "Card 2",
                  id: 1
                },
              ],
            },
            {
              title: "Deck 2",
              id: 2,
              cards: [
                {
                  text: "Card 1",
                  id: 1,
                },
                {
                  text: "Card 2",
                  id: 2,
                }
              ],
            },
          ]
        },
      ],
    };
  },
  handleAddCardSubmit: function(card) {
    this.updateBoards(card);
  },
  updateBoards: function(attrs) {
    this.setState({
      boards: this.state.boards.map((board) => {
        if (board.id === attrs.id) {
          return Object.assign({}, board, {
            title: attrs.title,
            decks: attrs.decks,
          });
        } else {
          return board;
        }
      }),
    });
  },
  render: function() {
    return (
      <div className="dashboard">
        <BoardList
          boards={this.state.boards}
          onAddCard={this.handleAddCardSubmit}
        />
      </div>
    );
  },
});



ReactDOM.render(
  <BoardsDashboard />,
  document.getElementById('content')
);
