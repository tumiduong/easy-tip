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


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const tipHistory = state => state.history.value;

export default historySlice.reducer;
