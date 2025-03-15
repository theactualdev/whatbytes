import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatState {
  rank: number;
  percentile: number;
  score: number;
}

// const data: Partial<StatState> = {
//     rank: 0,
//     percentile: 0,
//     score: 0,
// };

const initialState: StatState = {
  rank: 0,
  percentile: 0,
  score: 0,
};

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    updateStat: (state, action: PayloadAction<Partial<StatState>>) => {
      return { ...state, ...action.payload }; 
    },
  },
});

export const { updateStat } = statSlice.actions;
export default statSlice.reducer;
