import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  goal_amount: 100000,
  backed_amount: 89914,
  total_backers: 5007,
  days_left: 56,
  percentage_complete: 0
}

const fundingReducer = createSlice({
  name: "funding",
  initialState,
  reducers: {
    calcPercentage: (state) => {
      state.percentage_complete = (((state.backed_amount * 100) / 100) / state.goal_amount) * 100
    },
    updateTotalBackers: (state) => {
      state.total_backers = state.total_backers + 1
    },
    updateTotalBackedAmount: (state, action) => {
      state.backed_amount = state.backed_amount + action.payload
    }
  }
})

export const { calcPercentage, updateTotalBackers, updateTotalBackedAmount } = fundingReducer.actions

export const selectGoalAmount = (state) => state.funding.goal_amount
export const selectBackedAmount = (state) => state.funding.backed_amount
export const selectTotalBackers = (state) => state.funding.total_backers
export const selectDaysLeft = (state) => state.funding.days_left
export const selectPercentageComplete = (state) => state.funding.percentage_complete

export default fundingReducer.reducer