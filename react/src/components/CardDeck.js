import React from 'react';
import Card from './Card';

const CardDeck = ({ onCardClick }) => {
  const cardValues = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89'];

  return (
    <div className="card-deck">
      {cardValues.map(value => (
        <Card key={value} value={value} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardDeck;
