import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../utils/api';
import { isError, isLoading } from '../utilsStore';
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
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(changeUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builder.addMatcher(isError, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addMatcher(isLoading, (state) => {});
  },
});

export default userSlice.reducer;
