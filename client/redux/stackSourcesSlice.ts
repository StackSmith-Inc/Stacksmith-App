import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SourceState {
  allTechs: object[],
  pickTech: {
    frontend: object[],
    backend: object[],
    database: object[],
  }
  chosenTechs: {
    frontend: object[],
    backend: object[],
    database: object[],
  },
  
}

const initialState: SourceState = {
  allTechs: [],
  pickTech: {
    frontend: [],
    backend: [],
    database: [],
  },
  chosenTechs: {
    frontend: [],
    backend: [],
    database: [],
  },
}

interface techPayload {
  techname: string,
  img: string,
  techtype: string,
  techdescription: string
}

export const fetchSlice = createSlice({
  name: 'fetchSlice',
  initialState,
  reducers: {
    fetchTech: (state, action: PayloadAction<[]>) => {
      state.allTechs = action.payload
    },
    addTech: (state, action: PayloadAction<techPayload>) => {
      const index = action.payload.techtype.toLowerCase()
      state.chosenTechs[index].push(action.payload);
      for (let i = 0; i < state.pickTech[index].length; i--) {
        if (state.pickTech[index][i].techname === action.payload.techname) {
          state.pickTech[index].splice(i, 1);
          break;
        }
      }
    },
    removeTech: (state, action: PayloadAction<techPayload>) => {
      const index = action.payload.techtype.toLowerCase()
      state.pickTech[index].push(action.payload);
      for (let i = 0; i < state.chosenTechs[index].length; i--) {
        if (state.chosenTechs[index][i].techname === action.payload.techname) {
          state.chosenTechs[index].splice(i, 1);
          break;
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
// export const { load, increment } = stackSourceSlice.actions

export const { fetchTech, addTech, removeTech } = fetchSlice.actions

export default fetchSlice.reducer