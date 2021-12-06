import React from 'react'
import { PledgeStyled } from "./PledgeStyled"
import { PrimaryBtn, DisabledBtn } from "../Button/ButtonStyled"
import { useDispatch } from "react-redux"
import { toggleModal } from "../../reducers/uiReducer"
import { selectPledge } from "../../reducers/pledgesReducer"

const Pledge = ({ pledge_type, min_amount, description, spots_left, uuid }) => {
  const dispatch = useDispatch()

  const multipleActions = () => {
    dispatch(toggleModal()) 
    dispatch(selectPledge(uuid))
  }

  return (
    <>
      <PledgeStyled spots_left={spots_left}>
        <div>
          <h3>{pledge_type}</h3>
          <span>Pledge ${min_amount} or more</span>
        </div>
        <p className="paragraph">
          {description}
        </p>
        <div>
          <p className="spots">{spots_left} <span>left</span></p>
          {
            spots_left > 0 ? <PrimaryBtn onClick={() => multipleActions()}>Select Reward</PrimaryBtn> : <DisabledBtn>Out of stock</DisabledBtn>
          }
        </div>
      </PledgeStyled>
    </>
  )
}

export default Pledge
