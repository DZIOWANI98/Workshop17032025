import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CardSelection from './components/CardSelection';
import './App.css';

function Home() {
  const [username, setUsername] = useState(() => {
    // Retrieve the username from session storage if it exists
    return sessionStorage.getItem('username') || '';
  });
  const navigate = useNavigate();

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    // Save the username to session storage
    sessionStorage.setItem('username', username);
    // Redirect to CardSelection
    navigate('/card-selection');
  };

  return (
    <div className="App">
      <form onSubmit={handleUsernameSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState(() => {
    // Retrieve the username from session storage if it exists
    return sessionStorage.getItem('username') || '';
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-selection" element={<CardSelection username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
