// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | undefined;
}

const initialState: AuthState = {
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<string | undefined>) {
      state.token = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
