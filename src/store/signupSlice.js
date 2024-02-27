import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const usersAPI = "http://localhost:9002/users";
// get data from server
export const getServerData = createAsyncThunk(
  "signup/getServerData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(usersAPI);
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const sendDataToServer = createAsyncThunk(
  "signup/sendDataToServer",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(usersAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    isloggedin: false,
    localData: null,
    serverData: null,
    userExists: false,
  },
  reducers: {
    getLocalData: (state, action) => {
      state.localData = action.payload;
    },
    setUserExists: (state, action) => {
      state.userExists = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isloggedin = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get server data
    builder.addCase(getServerData.pending, (state, action) => {
      state.serverData = null;
    });
    builder.addCase(getServerData.fulfilled, (state, action) => {
      state.serverData = action.payload;
    });
    builder.addCase(getServerData.rejected, (state, action) => {
      state.serverData = null;
    });
  },
});

export const { getLocalData, setUserExists, setIsLoggedIn } =
  signupSlice.actions;

export default signupSlice.reducer;
