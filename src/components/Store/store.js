import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Slices/productsSlice';
import userSlice from './Slices/userSlice';
import basketSlice from './Slices/basketSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    basket: basketSlice,
  },
});
export default store;
