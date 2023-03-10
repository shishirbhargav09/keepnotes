import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const initialState = {
  notes: [],
  loading: false,

};

export const notesSlice = createSlice({
  name: "Notes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteNote.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(addNote.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.loading = false;
    });
    builder.addCase(getNotes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteNote.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addNote.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const getNotes = createAsyncThunk("notes/fetchAll", async (userid) => {
  const { data } = await axios.post(`${BASE_URL}/api/getallnotes`, {
    userid,
  });
  return data;
});
export const deleteNote = createAsyncThunk("notes/delete", async ({id,userid}) => {
  await axios.post(`${BASE_URL}/api/delete`, {
    id
  })

  const { data } = await axios.post(`${BASE_URL}/api/getallnotes`, {
    userid
  });

  return data;
});
export const addNote = createAsyncThunk("notes/addNote", async ({userid,text}) => {
  await axios.post(`${BASE_URL}/api/postnotes`, {
    userid,text
  });

  const { data } = await axios.post(`${BASE_URL}/api/getallnotes`, {
    userid
  });

  return data;
});

export const { reducer } = notesSlice.actions;

export default notesSlice.reducer;
