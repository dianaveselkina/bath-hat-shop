import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};
const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setList(state, action) {
      state.data = action.payload;
    },
  },
});
export const { setList } = products.actions;
export default products.reducer;
