import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isBookmarked: false
}

const uiReducer = createSlice({
  name: 'ui-reducer',
  initialState,
  reducers: {
    toggleBookmark: (state) => {
      state.isBookmarked = !state.isBookmarked
    }
  }
})

export const { toggleBookmark } = uiReducer.actions

export const selectIsBookmarked = (state) => state.ui_reducer.isBookmarked

export default uiReducer.reducer