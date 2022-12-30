import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedin: false,
  username: "",
  userid: "",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state,action) => {
      
      state.isloggedin = true;
      state.username = action.payload.username;
      state.userid = action.payload.userid;

    },
    logout: (state,action) => {
      
        state.isloggedin = false;
        state.username = '';
        state.userid = '';
  
      },
   
  },
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
