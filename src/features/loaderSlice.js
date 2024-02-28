import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: 'loader',
    initialState: { isLoading: true },
    reducers: {
        setISLoading: (state, { payload }) => {
            state.isLoading = payload;
        }
    }
})

export const { setISLoading } = loaderSlice.actions;

export default loaderSlice.reducer;


