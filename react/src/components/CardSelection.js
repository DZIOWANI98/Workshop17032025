import React, { useState, useEffect } from 'react';
import CardDeck from './CardDeck';

const CardSelection = ({ user }) => {
    const [username, getUsername] = useState(() => {
        // Retrieve the username from session storage if it exists
        return sessionStorage.getItem('username') || '';
    });

  const [selectedCard, setSelectedCard] = useState(() => {
    // Retrieve the selected card from session storage if it exists
    return sessionStorage.getItem('selectedCard') || null;
  });

  const handleCardClick = (value) => {
    setSelectedCard(value);
    // Save the selected card to session storage
    sessionStorage.setItem('selectedCard', value);
  };

  useEffect(() => {
    // Optionally, you can clear the session storage when the component unmounts
    return () => {
      sessionStorage.removeItem('selectedCard');
    };
  }, []);

  return (
    <div>
      <h1>Scrum Poker</h1>
      <div className="username">Welcome, {username}!</div>
      <CardDeck onCardClick={handleCardClick} />
      {selectedCard && <div className="selected-card">Selected Card: {selectedCard}</div>}
    </div>
  );
};

export default CardSelection;
