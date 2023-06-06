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
import { UserContext } from './context/userContext';
import { CardsContext } from './context/cardContext';
import { filteredCards, findLiked } from './utils/utils';
import { RegistrationForm } from './components/Forms/RegistrationForm';
import { Modal } from './components/Modal/Modal';
import { AuthorizationForm } from './components/Forms/AuthorizationForn';
import { PasswordRecoveryForm } from './components/Forms/PasswordRecoveryForm';
import { WomenHatPage } from './page/WomenHatPage';
import { MenHatPage } from './page/MenHatPage';
import { BabyHatPage } from './page/BabyHatPage';
import { SalePage } from './page/SalePage';
import { PaymentShippingPage } from './page/PaymentShippingPage';
import { ProductCarePage } from './page/ProductCarePage';
import { ProductReturnPage } from './page/ProductReturnPage';
import { setList } from './components/Store/Slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfilePage } from './page/UserProfilePage';
function App() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState(undefined);
  const [favorites, setFavorites] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [response, setResponse] = useState({});

  const dispatch = useDispatch();
  const { data: userData } = useSelector((s) => s.user);

  const handleProductLike = async (product, wasLiked) => {
    const updatedCard = await api.changeProductLike(product._id, wasLiked);
    const index = cards.findIndex((e) => e._id === updatedCard._id);
    if (index !== -1) {
      setCards((state) => [
        ...state.slice(0, index),
        updatedCard,
        ...state.slice(index + 1),
      ]);
    }
    wasLiked
      ? setFavorites((state) => state.filter((f) => f._id !== updatedCard._id))
      : setFavorites((state) => [updatedCard, ...state]);
  };

  const productRating = (reviews) => {
    if (!reviews || !reviews.length) {
      return 0;
    }
    const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
    return res / reviews.length;
  };

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getProductList()])
      .then(([userData, data]) => {
        const filtered = filteredCards(data.products);
        dispatch(setList(filtered));
        setCards(filtered);
        const fav = filtered.filter((e) => findLiked(e, userData._id));

        setFavorites(fav);
      })
      .catch((error) => console.error('Ошибка при загрузке данных', error));
  }, [dispatch]);

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
    if (sortId === 'rating') {
      const newCards = cards.sort(
        (a, b) => productRating(b.reviews) - productRating(a.reviews)
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

  const cardsValue = {
    handleLike: handleProductLike,
    cards: cards,
    search,
    favorites,
    onSort,
    setModalActive,
    productRating,
  };

  return (
    <div className="App">
      <CardsContext.Provider value={cardsValue}>
        <UserContext.Provider value={user}>
          <Header setSearch={setSearch} response={response}></Header>
          <NavList />
          <Routes>
            <Route
              path="/registrationform"
              element={
                <Modal
                  modalActive={modalActive}
                  setModalActive={setModalActive}
                >
                  <RegistrationForm setModalActive={setModalActive} />
                </Modal>
              }
            />
            <Route
              path="/authorizationform"
              element={
                <Modal
                  modalActive={modalActive}
                  setModalActive={setModalActive}
                >
                  <AuthorizationForm
                    setResponse={setResponse}
                    setModalActive={setModalActive}
                  />
                </Modal>
              }
            />

            <Route
              path="/passwordrecoveryform"
              element={
                <Modal
                  modalActive={modalActive}
                  setModalActive={setModalActive}
                >
                  <PasswordRecoveryForm setModalActive={setModalActive} />
                </Modal>
              }
            />

            <Route
              path="/"
              element={
                <CatalogPage onSort={onSort} search={search} cards={cards} />
              }
            />
            <Route
              path="/bath-hat-shop"
              element={
                <CatalogPage onSort={onSort} search={search} cards={cards} />
              }
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/womenhatpage" element={<WomenHatPage />} />
            <Route path="/menhatpage" element={<MenHatPage />} />
            <Route path="/babyhatpage" element={<BabyHatPage />} />
            <Route path="/salepage" element={<SalePage />} />
            <Route path="/userprofile" element={<UserProfilePage />} />
            <Route
              path="/paymentshippingpage"
              element={<PaymentShippingPage />}
            />
            <Route path="/productcarepage" element={<ProductCarePage />} />
            <Route path="/productreturnpage" element={<ProductReturnPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </CardsContext.Provider>
    </div>
  );
}

export default App;
