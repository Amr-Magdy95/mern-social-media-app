import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../../app/store";
import { RegisterFormTypes } from "./components/SignupForm";
import { instance } from "../../axios/axios";
import { SigninFormTypes } from "./components/SigninForm";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user: RegisterFormTypes) => {
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
      return response.data;
    } catch (err: any) {
      console.log(err.response);
      throw err.response.data;
    }
  }
);

export const userSignin = createAsyncThunk(
  "auth/userSignin",
  async (user: SigninFormTypes) => {
    try {
      const response = await instance.post(
        "/auth/signin",
        JSON.stringify(user),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err: any) {
      throw err.response.data;
    }
  }
);

interface SigninResponse {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
  accessToken: string;
}

interface AuthState {
  currentUser: {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
    accessToken: string;
  };
}

const initialState = {
  currentUser: {},
} as unknown as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>)
  },
  extraReducers: (builder) => {
    builder.addCase(
      userSignin.fulfilled,
      (state, action: PayloadAction<SigninResponse>) => {
        const { _id, accessToken, email, firstName, lastName } = action.payload;
        state.currentUser._id = _id;
        state.currentUser.accessToken = accessToken;
        state.currentUser.email = email;
        state.currentUser.firstName = firstName;
        state.currentUser.lastName = lastName;
      }
    );
  },
});

// export const {} = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
