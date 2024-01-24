import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface UserState {}

const initialState = {} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;

// export const selectUser = (state: RootState) => state.user.

export default userSlice.reducer;
