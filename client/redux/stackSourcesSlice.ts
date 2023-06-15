/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SourceState {
  allTechs: {img:string, techdescription:string, techname:string, techtype:string}[],
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
      const allTechsArr = state.allTechs
      //@ts-ignore
      allTechsArr.forEach((el: techPayload) => {
        //@ts-ignore
        state.pickTech[el.techtype.toLowerCase()].push(el)
      }) 
    },
    addTech: (state, action: PayloadAction<techPayload>) => {
      const index = action.payload.techtype.toLowerCase()
      // @ts-ignore
      state.chosenTechs[index].push(action.payload);
      // @ts-ignore
      for (let i = 0; i < state.pickTech[index].length; i--) {
        // @ts-ignore
        if (state.pickTech[index][i].techname === action.payload.techname) {
          // @ts-ignore
          state.pickTech[index].splice(i, 1);
          break;
        }
      }
    },
    removeTech: (state, action: PayloadAction<techPayload>) => {
      const index = action.payload.techtype.toLowerCase()
      // @ts-ignore
      state.pickTech[index].push(action.payload);
      // @ts-ignore
      for (let i = 0; i < state.chosenTechs[index].length; i--) {
        // @ts-ignore
        if (state.chosenTechs[index][i].techname === action.payload.techname) {
          // @ts-ignore
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