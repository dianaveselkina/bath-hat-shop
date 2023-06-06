import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../utils/api';

const initialState = {
  data: [],
  loading: false,
};

export const getUser = createAsyncThunk('getUser', async function () {
  const data = await api.getUserInfo();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      console.log({ action });
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
