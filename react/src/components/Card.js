import React from 'react';

const Card = ({ value, onClick, selected }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`} onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Card;
