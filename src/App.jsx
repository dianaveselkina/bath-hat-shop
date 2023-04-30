import React, { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { api } from './utils/api';

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState(undefined);

  const filteredCards = (cards) => {
    return cards.filter((e) => e.author._id === '64423c303291d790b3fc967c');
  };

  useEffect(() => {
    api.getProductList().then((data) => setCards(filteredCards(data.products)));
  }, []);

  useEffect(() => {
    if (search === undefined) return;
    api.searchProducts(search).then((data) => setCards(data));
  }, [search]);

  return (
    <div className="App">
      <Header setSearch={setSearch}></Header>
      <CardList cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
