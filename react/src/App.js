import React, { useState } from 'react';
import CardDeck from './components/CardDeck';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (value) => {
    setSelectedCard(value);
  };

  return (
    <div className="App">
      <h1>Scrum Poker</h1>
      <CardDeck onCardClick={handleCardClick} />
      {selectedCard && <div className="selected-card">Selected Card: {selectedCard}</div>}
    </div>
  );
}

export default App;
