import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { userCredencials: {}, error: '' },
  reducers: {
    setUserCredencials: (state, { payload }) => {
      state.userCredencials = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    }
  }
})

export const { setUserCredencials, setError } = authSlice.actions;

export default authSlice.reducer;


