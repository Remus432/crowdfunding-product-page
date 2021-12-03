import { configureStore } from "@reduxjs/toolkit"
import fundingReducer from "../reducers/fundingReducer"
import pledgesReducer from "../reducers/pledgesReducer"
import uiReducer from "../reducers/uiReducer"

export const store = configureStore({
  reducer: {
    funding: fundingReducer,
    ui_reducer: uiReducer,
    pledges: pledgesReducer
  }
})