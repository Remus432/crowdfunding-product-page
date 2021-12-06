import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isBookmarked: false,
  isModalOn: false
}

const uiReducer = createSlice({
  name: 'ui-reducer',
  initialState,
  reducers: {
    toggleBookmark: (state) => {
      state.isBookmarked = !state.isBookmarked
    },

    toggleModal: (state) => {
      state.isModalOn = !state.isModalOn
    }
  }
})

export const { toggleBookmark, toggleModal } = uiReducer.actions

export const selectIsBookmarked = (state) => state.ui_reducer.isBookmarked
export const selectIsModalOn = (state) => state.ui_reducer.isModalOn

export default uiReducer.reducer