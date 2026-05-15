import { useState, useEffect } from "react";
import { GameHeader } from "../components/GameHeader";
import Card from "../components/Card";

const cardValues = [
  "🍎","🍌","🍇","🍓",
  "🍉","🍍","🥭","🍒",
  "🍎","🍌","🍇","🍓",
  "🍉","🍍","🥭","🍒"
];

function App() {

  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    const finalcards = cardValues.map((value, index) => ({
      id: index,
      value: value,
      isFlipped: false,
      isMatched: false
    }));

    setCards(finalcards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {

    if (card.isFlipped || card.isMatched) return;

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      }
      return c;
    });

    setCards(newCards);
  };

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
          />
        ))}
      </div>

    </div>
  );
}

export default App;