import React from 'react';

const Card = ({ value, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Card;
