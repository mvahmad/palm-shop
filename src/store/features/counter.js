import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 1 };

function increment(state) {
  state.value += 1;
}

function decrement(state) {
  state.value -= 1;
  if (state.value === 0) {
    state.value = 1;
  }
}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
    decrement,
  },
});

export const { increment: incrementAction, decrement: decrementAction } =
  counterSlice.actions;
export default counterSlice.reducer;
