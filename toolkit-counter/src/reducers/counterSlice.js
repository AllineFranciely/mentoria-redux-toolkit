import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  value: 0,
  arrayCounter: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.value +=1;
    },
    decrement: (state) => {
      state.value -=1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
