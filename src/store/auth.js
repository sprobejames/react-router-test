import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

const initialState = {
  user: null
};

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  () => {
    console.log("here");
    return { name: "John Doe" };
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setToken: (state) => {
      api.defaults.headers.common.Authorization = `Bearer Token1234`;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser, setToken } = userSlice.actions;

export default userSlice.reducer;
