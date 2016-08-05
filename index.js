function guid() {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
};

const Card = React.createClass({
  handleDeleteCard: function() {
    this.props.onDeleteCard({
      title: this.props.key,
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

const Deck = React.createClass({
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
  },
  handleDeleteCard: function(args) {
    this.props.onDeleteCard(args);
  },
  render: function() {
    const cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          text={card.text}
          boardID={this.props.boardID}
          deckID={this.props.id}
          onDeleteCard={this.handleDeleteCard}
        />
      );
    });
    return (
      <div className="decks">
        <div className="delete deck-icon">X</div>
        <h3>{this.props.title}</h3>
        {cards}
        <CardInput
          boardID={this.props.boardID}
          deckID={this.props.id}
          onClick={this.handleNewCard}
        />
      </div>
    );
  },
});

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

const Board = React.createClass({
  handleNewCard: function(args) {
    this.props.onCardSubmit(args);
  },
  handleDeleteCard: function(args) {
    this.props.onDeleteCard(args);
  },
  handleNewDeck: function(args) {
    this.props.onDeckSubmit(args);
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
          onDeleteCard={this.handleDeleteCard}
        />
      );
    });
    return (
      <div className="boards">
        <div className="delete board-icon">X</div>
        <h2>{this.props.title}</h2>
        <div className="decks-list">
          {decks}
          <DeckInput
            onClick={this.handleNewDeck}
            boardID={this.props.id}
            cards={[]}
          />
        </div>
      </div>
    );
  },
});

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
  handleNewBoard: function(args) {
    this.props.onBoardSubmit(args);
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

const BoardsDashboard = React.createClass({
  getInitialState: function() {
    return {
      boards: [
        {
          title: "things to do today",
          id: 1,
          decks: [
            {
              title: "before work",
              id: 1,
              cards: [
                {
                  text: "feed the dogs",
                  id: 2
                },
                {
                  text: "take the trash out",
                  id: 1
                },
              ],
            },
            {
              title: "after work",
              id: 2,
              cards: [
                {
                  text: "walk the dogs",
                  id: 1,
                },
                {
                  text: "find a barrel of wine to swim in",
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
  handleDeleteCard: function(args) {
    console.log(args);
    const c = args.title;
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
            for (var k = 0; k < boards[i].decks[j].cards.length; j++) {
              if (boards[i].decks[j].cards[k].id == args.title) {
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
  render: function() {
    return (
      <div className="dashboard">
        <BoardList
          boards={this.state.boards}
          onCardSubmit={this.handleNewCard}
          onDeleteCard={this.handleDeleteCard}
          onDeckSubmit={this.handleNewDeck}
          onBoardSubmit={this.handleNewBoard}
        />
      </div>
    );
  },
});



ReactDOM.render(
  <BoardsDashboard />,
  document.getElementById('content')
);
