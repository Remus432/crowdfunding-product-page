import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const initialState = {
  selected_pledge: "",
  pledgesArr: [
    {
      type: "Bamboo Stand",
      min_amount: 25,
      description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      spots_left: 101,
      uuid: uuidv4()
    },
    {
      type: "Black Edition Stand",
      min_amount: 75,
      description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      spots_left: 64,
      uuid: uuidv4()
    },
    {
      type: "Mahogany Special Edition",
      min_amount: 200,
      description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      spots_left: 0,
      uuid: uuidv4()
    }
  ],
  defaultPledge: {
    type: "Pledge with no reward",
    description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    uuid: uuidv4()
  }
}

const pledgesReducer = createSlice({
  name: "pledges",
  initialState,
  reducers: {
    selectPledge: (state, action) => {
      state.selected_pledge = action.payload
    }
  }
})

export const { selectPledge } = pledgesReducer.actions

export const selectPledges = (state) => state.pledges.pledgesArr
export const selectCurrentPledge = (state) => state.pledges.selected_pledge
export const selectDefaultPledge = (state) => state.pledges.defaultPledge

export default pledgesReducer.reducer