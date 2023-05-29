import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../utils/api';

const initialState = {
  data: [],
  loading: false,
};

export const getUser = createAsyncThunk('getUser', async function () {
  const data = await api.getUserInfo();
  console.log({ data });
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default userSlice.reducer;
