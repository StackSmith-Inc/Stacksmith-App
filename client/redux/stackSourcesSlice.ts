import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SourceState {
  frontend: string[],
  backend: string[],
  database: string[]
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
      const newState = "React"
      state.frontend.push(newState)
    },
    increment: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const fetchSlice = createSlice({
  name: 'fetchSlice',
  initialState,
  reducers: {
    fetchTech: () => {
      fetch ('/api', {
        method: 'GET',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: 'SELECT * FROM techTable',
        cache: 'default'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('request failed')
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        return data
      })
      .catch(error => {
        console.error(error)
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { load, increment } = stackSourceSlice.actions

export const { fetchTech } = fetchSlice.actions

export default stackSourceSlice.reducer