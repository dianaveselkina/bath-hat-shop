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

export const changeUser = createAsyncThunk('changeUser', async function (data) {
  console.log({ data });
  if (data.avatar) {
    const res = await api.changeUserAvatar({ avatar: data.avatar });
    return res;
  } else {
    const res = await api.changeUserInfo({
      name: data.name,
      about: data.about,
    });
    return res;
  }
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
