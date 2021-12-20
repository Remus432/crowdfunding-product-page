import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isBookmarked: false,
  isModalOn: false,
  isPledgeBacked: false,
  isMenuOn: false
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
    },

    togglePledgeBacked: (state) => {
      state.isPledgeBacked = !state.isPledgeBacked
    },

    toggleMenu: (state) => {
      state.isMenuOn = !state.isMenuOn
    }
  }
})

export const { toggleBookmark, toggleModal, togglePledgeBacked, toggleMenu } = uiReducer.actions

export const selectIsBookmarked = (state) => state.ui_reducer.isBookmarked
export const selectIsModalOn = (state) => state.ui_reducer.isModalOn
export const selectIsPledgeBacked = (state) => state.ui_reducer.isPledgeBacked
export const selectIsMenuOn = (state) => state.ui_reducer.isMenuOn

export default uiReducer.reducer