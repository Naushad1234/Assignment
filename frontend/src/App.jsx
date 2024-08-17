import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cards");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Header onSearch={handleSearch} />
      <main className="mt-[50px] p-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-6">
          {filteredCards.map((card) => (
            <Card
              key={card._id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
