function enterKey() {
  $('.card-input').keypress(function(e){
      if(e.keyCode==13)
      $('.card-button').click();
    });
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
  handleNewCard: function() {
    this.props.onClick(this.refs.title.value)
  },
  render: function () {
    return (
      <div className="card-form">
        <input className="card-input" ref="title" type="text"
        placeholder="add a card" />
        <input className="card-button" onClick={this.handleNewCard}
         type="submit" value="+" />
      </div>
    );
  },
});

const Deck = React.createClass({
  handleNewCard: function(title) {
    this.props.onCardSubmit(title);
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
  handleNewCard: function(title) {
    this.props.onCardSubmit(title);
  },
  render: function() {
    const decks = this.props.decks.map((deck) => {
      return (
        <Deck
          key={deck.id}
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
  handleNewCard: function(title) {
    this.props.onCardSubmit(title);
  },
  render: function() {
    const boards = this.props.boards.map((board) => {
      return (
        <Board
          key={board.id}
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
  handleNewCard: function(title) {
    function guid() {
      return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    };
    function newCard(title) {
      const card = {
        text: title,
        id: guid(),
      };
      return card;
    };
    const c = newCard(title);
    let boards = this.state.boards;
    boards[0].decks[0].cards.push(c);
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
enterKey();
