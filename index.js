function guid() {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
};

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
          placeholder="add a card" />
        </form>
      </div>
    );
  },
});

const Deck = React.createClass({
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
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
          boardID={this.props.boardID}
          deckID={this.props.id}
        />
      </div>
    );
  },
});

const Board = React.createClass({
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
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
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
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
  render: function() {
    return (
      <div className="dashboard">
        <BoardList
          boards={this.state.boards}
          onCardSubmit={this.handleNewCard}
        />
      </div>
    );
  },
});



ReactDOM.render(
  <BoardsDashboard />,
  document.getElementById('content')
);
