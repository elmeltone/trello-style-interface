const Card = React.createClass({
  render: function () {
    return (
      <div className="cards">
        {this.props.text}
      </div>
    );
  },
});

const Deck = React.createClass({
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
      </div>
    );
  },
});

const Board = React.createClass({
  render: function() {
    const decks = this.props.decks.map((deck) => {
      return (
        <Deck
          key={deck.id}
          title={deck.title}
          cards={deck.cards}
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
  render: function() {
    const boards = this.props.boards.map((board) => {
      return (
        <Board
          key={board.id}
          title={board.title}
          decks={board.decks}
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
  render: function() {
    return (
      <div className="dashboard">
        <BoardList
          boards={this.state.boards}
        />
      </div>
    );
  },
});



ReactDOM.render(
  <BoardsDashboard />,
  document.getElementById('content')
);
