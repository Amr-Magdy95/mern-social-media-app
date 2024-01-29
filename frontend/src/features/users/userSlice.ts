import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../../app/store";
import { RegisterFormTypes } from "./components/SignupForm";
import { instance } from "../../axios/axios";
import { displayToast } from "../toast/toastSlice";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: RegisterFormTypes, { dispatch }) => {
    try {
      const response = await instance.post(
        "/auth/signup",
        JSON.stringify(user),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      dispatch(
        displayToast({
          show: true,
          message: `User ${response.data.user.email} signup was successful!`,
          success: response.data.success,
        })
      );
    } catch (err: any) {
      console.log(err);
      dispatch(
        displayToast({
          show: true,
          message: err.response.data.message,
          success: err.response.data.success,
        })
      );
    }
  }
);

interface AuthState {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
}

const initialState = {} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>)
  },
  extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
