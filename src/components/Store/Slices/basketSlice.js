import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goods: [{ product: { _id: 1 }, count: 0 }],
  loading: false,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    addGoods: (state, { payload }) => {
      const productInBasket = state.goods.find(
        (e) => e.product._id === payload.product._id
      );
      if (productInBasket) {
        const order = productInBasket.count + payload.count;
        productInBasket.count =
          order < payload.product.stock ? order : productInBasket.count;
      } else {
        state.goods.push(payload);
      }
    },
    removeGoods: (state, { payload }) => {
      const productInBasket = state.goods.find(
        (e) => e.product._id === payload.product._id
      );
      if (productInBasket) {
        productInBasket.count = productInBasket.count - payload.count;
      }
    },
  },
});
export const { actions } = basketSlice;
export default basketSlice.reducer;
