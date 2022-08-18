import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../../../api/users.api";

const initialState = {
  isLoggedIn: false,
  error: "",
};

export const login = createAsyncThunk("users/login", (user) =>
  loginRequest(user)
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      return { isLoggedIn: true, error: "" };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected", action);
      return { isLoggedIn: false, error: action.error.message };
    });
  },
});

export default usersSlice.reducer;
