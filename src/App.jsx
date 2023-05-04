import React, { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { api } from './utils/api';
import { ProductPage } from './page/ProductPage';
import { CatalogPage } from './page/CatalogPage';
import { FavoritePage } from './page/FavoritePage';
import { ErrorPage } from './page/ErrorPage';
import { Route, Routes } from 'react-router-dom';

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
    api.searchProducts(search).then((data) => setCards(filteredCards(data)));
  }, [search]);

  return (
    <div className="App">
      <Header setSearch={setSearch}></Header>
      <Routes>
        <Route path="/" element={<CatalogPage cards={cards} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
