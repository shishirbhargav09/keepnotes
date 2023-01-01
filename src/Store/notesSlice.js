import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "Notes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    builder.addCase(deleteNote.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    builder.addCase(addNote.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
  },
});

export const getNotes = createAsyncThunk("notes/fetchAll", async (userid) => {
  const { data } = await axios.post("http://localhost:3000/api/getallnotes", {
    userid,
  });
  return data;
});
export const deleteNote = createAsyncThunk("notes/delete", async ({id,userid}) => {
  await axios.post("http://localhost:3000/api/delete", {
    id
  })

  const { data } = await axios.post("http://localhost:3000/api/getallnotes", {
    userid
  });

  return data;
});
export const addNote = createAsyncThunk("notes/addNote", async ({userid,text}) => {
  await axios.post("http://localhost:3000/api/postnotes", {
    userid,text
  });

  const { data } = await axios.post("http://localhost:3000/api/getallnotes", {
    userid
  });

  return data;
});

export const { reducer } = notesSlice.actions;

export default notesSlice.reducer;
