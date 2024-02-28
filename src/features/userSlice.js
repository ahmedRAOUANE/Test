import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { currentUser: null },
    reducers: {
        setUser: (user, { payload }) => {
            user.currentUser = payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;