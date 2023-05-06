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
import { NavList } from './components/NavList/Navlist';

function App() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState(undefined);

  const filteredCards = (cards) => {
    return cards.filter((e) => e.author._id === '64423c303291d790b3fc967c');
  };
  const handleProductLike = async (product, isLiked) => {
    const updatedCard = await api.changeProductLike(product._id, isLiked);
    const index = cards.findIndex((e) => e._id === updatedCard._id);
    if (index !== -1) {
      setCards((state) => [
        ...state.slice(0, index),
        updatedCard,
        ...state.slice(index + 1),
      ]);
    }
  };
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getProductList()]).then(
      ([userData, data]) => {
        setUser(userData);
        setCards(filteredCards(data.products));
      }
    );
  }, []);

  const onSort = (sortId) => {
    if (sortId === 'popular') {
      const newCards = cards.sort((a, b) => b.likes.length - a.likes.length);
      setCards([...newCards]);
      return;
    }
    if (sortId === 'new') {
      const newCards = cards.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setCards([...newCards]);
      return;
    }
    if (sortId === 'cheaper') {
      const newCards = cards.sort((a, b) => a.price - b.price);
      setCards([...newCards]);
    }

    if (sortId === 'expensive') {
      const newCards = cards.sort((a, b) => b.price - a.price);
      setCards([...newCards]);
    }
    if (sortId === 'sale') {
      const newCards = cards.sort((a, b) => b.discount - a.discount);
      setCards([...newCards]);
    }
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
      <NavList />
      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              onSort={onSort}
              search={search}
              cards={cards}
              user={user}
              handleLike={handleProductLike}
            />
          }
        />
        <Route
          path="/bath-hat-shop"
          element={
            <CatalogPage
              onSort={onSort}
              search={search}
              cards={cards}
              user={user}
              handleLike={handleProductLike}
            />
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
