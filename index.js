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
    return (
      <div className="decks">
        <h3>{this.props.title}</h3>
        <div className="cards-list">
          <Card
            text={this.props.cards}
          />
        </div>
      </div>
    );
  },
});

const Board = React.createClass({
  render: function() {
    return (
      <div className="boards">
        <h2>{this.props.title}</h2>
        <div className="decks-list">
          <Deck
            key="0"
            title="Deck 1"
            cards={[
                <Card key="0" text="Card 1" />,
                <Card key="1" text="Card 2" />
            ]}
          />
          <Deck
            key="1"
            title="Deck 2"
            cards={[
                <Card key="0" text="Card 1" />,
                <Card key="1" text="Card 2" />
            ]}
          />
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <Board
    title="Board 1"
    decks={[
      'Deck 1',
      'Deck 2'
    ]}
  />,
  document.getElementById('content')
);
