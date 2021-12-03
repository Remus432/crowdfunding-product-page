import React from 'react'
import PledgeStyled from "./PledgeStyled"
import { PrimaryBtn, DisabledBtn } from "../Button/ButtonStyled"

const Pledge = ({ type, min_amount, description, spots_left }) => {
  return (
    <>
      <PledgeStyled spots_left={spots_left}>
        <div>
          <h3>{type}</h3>
          <span>Pledge ${min_amount} or more</span>
        </div>
        <p className="paragraph">
          {description}
        </p>
        <div>
          <p className="spots">{spots_left} <span>left</span></p>
          {
            spots_left > 0 ? <PrimaryBtn>Select Reward</PrimaryBtn> : <DisabledBtn>Out of stock</DisabledBtn>
          }
        </div>
      </PledgeStyled>
    </>
  )
}

export default Pledge
