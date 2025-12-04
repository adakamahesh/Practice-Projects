import { createSlice,  } from "@reduxjs/toolkit";

interface NumberState {
  value: string; // store raw value
}

const initialState: NumberState = {
  value: "",
};

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    setNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNumber } = numberSlice.actions;

export default numberSlice.reducer;
