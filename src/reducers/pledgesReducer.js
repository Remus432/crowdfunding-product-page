import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selected_pledge: "",
  pledgesArr: [
    {
      type: "Bamboo Stand",
      min_amount: 25,
      description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      spots_left: 101
    },
    {
      type: "Black Edition Stand",
      min_amount: 75,
      description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      spots_left: 64
    },
    {
      type: "Mahogany Special Edition",
      min_amount: 200,
      description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      spots_left: 0
    }
  ]
}

const pledgesReducer = createSlice({
  name: "pledges",
  initialState,
  reducers: {

  }
})

export const selectPledges = (state) => state.pledges.pledgesArr

export default pledgesReducer.reducer