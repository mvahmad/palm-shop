import { createSlice } from "@reduxjs/toolkit";

function increment(state) {
  state.value += 1;
}

function decrement(state) {
  if (state.value >= 0) {
    state.value -= 1;
  }
}

function incrementByAmount(state, action) {
  state.value += action.payload;
  console.log(action.payload);
}
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increment,
    decrement,
    incrementByAmount,
  },
});
export const {
  increment: incrementAction,
  decrement: decrementAction,
  incrementByAmount: incrementByAmountAction,
} = counterSlice.actions;
export default counterSlice.reducer;
