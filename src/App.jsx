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
import { filteredCards } from './utils/utils';
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
import { useDispatch, useSelector } from 'react-redux';
import { UserProfilePage } from './page/UserProfilePage';
import { getUser } from './components/Store/Slices/userSlice';
import { InterestingFactsPage } from './page/InterestingFactsPage';
import SimpleSlider from './page/PhotoClientsPage';
import { ChartReviewsPage } from './page/ChartReviewsPage';
import {
  fetchProducts,
  searchProducts,
} from './components/Store/Slices/productsSlice';
import { BasketPage } from './page/BasketPage';

function App() {
  const [cards, setCards] = useState([]);

  const [modalActive, setModalActive] = useState(false);
  const [response, setResponse] = useState({});

  const dispatch = useDispatch();
  const { search } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(getUser()).then(() => dispatch(fetchProducts()));
  }, [dispatch]);

  useEffect(() => {
    api.getProductList().then((data) => setCards(filteredCards(data.products)));
  }, []);

  useEffect(() => {
    if (search === null) return;
    dispatch(searchProducts(search));
  }, [search, dispatch]);

  return (
    <div className="App">
      <Header response={response} setModalActive={setModalActive}></Header>
      <NavList />
      <Routes>
        <Route
          path="/registrationform"
          element={
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
              <RegistrationForm setModalActive={setModalActive} />
            </Modal>
          }
        />
        <Route
          path="/authorizationform"
          element={
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
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
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
              <PasswordRecoveryForm setModalActive={setModalActive} />
            </Modal>
          }
        />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/" element={<CatalogPage />} />
        <Route path="/bath-hat-shop" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/womenhatpage" element={<WomenHatPage />} />
        <Route path="/menhatpage" element={<MenHatPage />} />
        <Route path="/babyhatpage" element={<BabyHatPage />} />
        <Route path="/salepage" element={<SalePage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/paymentshippingpage" element={<PaymentShippingPage />} />
        <Route path="/productcarepage" element={<ProductCarePage />} />
        <Route path="/productreturnpage" element={<ProductReturnPage />} />
        <Route path="/chartreviews" element={<ChartReviewsPage />} />
        <Route
          path="/interestingfactspage"
          element={<InterestingFactsPage />}
        />
        <Route path="/photoclientspage" element={<SimpleSlider />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
