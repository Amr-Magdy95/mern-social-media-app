import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const displayToast = createAsyncThunk(
  "toast/displayToast",
  async (toastObj: ToastState, { dispatch }) => {
    dispatch(
      toastSlice.actions.showToast({
        show: true,
        message: toastObj.message,
        success: toastObj.success,
      })
    );
    setTimeout(() => {
      dispatch(toastSlice.actions.hideToast());
    }, 5000);
  }
);

interface ToastState {
  show: Boolean;
  message: string;
  success: Boolean;
}
const initialState = {
  show: false,
  message: "",
  success: false,
} as ToastState;

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastState>) => {
      state.show = true;
      state.message = action.payload.message;
      state.success = action.payload.success;
    },
    hideToast: (state) => {
      state.show = false;
      state.message = "";
    },
  },
});

export const selectToast = (state: RootState) => state.toast;
export const { hideToast, showToast } = toastSlice.actions;

export default toastSlice.reducer;
