import CardDeck from './components/CardDeck';

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
    <>
    <h1>Scrum Poker</h1>
    <CardDeck onCardClick={handleCardClick} />
    {selectedCard && <div className="selected-card">Selected Card: {selectedCard}</div>}
  </>
)