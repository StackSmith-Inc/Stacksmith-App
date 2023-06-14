import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SourceState {
  frontend: Object[],
  backend: Object[],
  database: Object[]
  value: number
}

const initialState: SourceState = {
  frontend: [],
  backend: [],
  database: [],
  value: 3
}

export const stackSourceSlice = createSlice({
  name: 'stackSource',
  initialState,
  reducers: {
    load: (state) => {
      const newState = [{ name: "React"}];
      state.frontend = newState;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer