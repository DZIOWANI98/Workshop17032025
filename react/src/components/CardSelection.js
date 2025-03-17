import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDeck from './CardDeck';

const CardSelection = ({ username }) => {
  const { sessionId } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [sessionData, setSessionData] = useState({});

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.sessionId === sessionId) {
        setSessionData(data.sessionData);
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, [sessionId]);

  const handleCardClick = (value) => {
    setSelectedCard(value);
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      ws.send(JSON.stringify({ sessionId, username, selectedCard: value }));
    };
  };

  return (
    <div>
      <h1>Scrum Poker, session: {sessionId}</h1>
      <div className="username">Welcome, {username}!</div>
      <CardDeck onCardClick={handleCardClick} selectedCard={selectedCard} />
      {selectedCard && <div className="selected-card">Selected Card: {selectedCard}</div>}
      <div className="session-data">
        <h2>Session Data:</h2>
        <pre>{JSON.stringify(sessionData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CardSelection;
