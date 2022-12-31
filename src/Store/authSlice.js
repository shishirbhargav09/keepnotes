import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloggedin: false,
  username: "",
  useremail: "",
  userid: "",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state,action) => {
      
      state.isloggedin = true;
      state.username = action.payload.username;
      state.useremail = action.payload.useremail;
      state.userid = action.payload.userid;

    },
    logout: (state,action) => {
      
        state.isloggedin = false;
        state.username = '';
        state.useremail = '';
        state.userid = '';
  
      },
   
  },
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
