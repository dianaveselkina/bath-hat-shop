import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './Slices/productsSlice';
import userSlice from './Slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
});
export default store;
