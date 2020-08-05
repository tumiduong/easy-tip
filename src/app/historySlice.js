import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    value: {},
  },
  reducers: {
    addToHistory: (state, action) => {
      return [action.payload, ...state.value];
    },
    // removeFromHistory: (state, action) => {
    //   state.value -= 1;
    // },
    deleteHistory: state => {
      state.value = {}
    },
  },
});

export const { addToHistory, deleteHistory } = historySlice.actions;

export const tipHistory = state => state.history.value;

export default historySlice.reducer;
