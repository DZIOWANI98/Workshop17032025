import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDeck from './CardDeck';

const CardSelection = ({ username }) => {
  const { sessionId } = useParams();
  const [selectedCard, setSelectedCard] = useState(() => {
    // Retrieve the selected card from session storage if it exists
    return sessionStorage.getItem(`selectedCard_${sessionId}`) || null;
  });

  const handleCardClick = (value) => {
    setSelectedCard(value);
    // Save the selected card to session storage
    sessionStorage.setItem(`selectedCard_${sessionId}`, value);
  };

  useEffect(() => {
    // Optionally, you can clear the session storage when the component unmounts
    return () => {
      sessionStorage.removeItem(`selectedCard_${sessionId}`);
    };
  }, [sessionId]);

  return (
    <div>
      <h1>Scrum Poker, session: {sessionId}</h1>
      <div className="username">Welcome, {username}!</div>
      <CardDeck onCardClick={handleCardClick} selectedCard={selectedCard} />
      {selectedCard && <div className="selected-card">Selected Card: {selectedCard}</div>}
    </div>
  );
};

export default CardSelection;
