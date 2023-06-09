import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
};
const products = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {},
});
export const { setList } = products.actions;
export default products.reducer;
