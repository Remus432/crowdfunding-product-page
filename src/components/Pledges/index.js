import React from 'react'
import PledgesStyled from "./PledgesStyled"
import Pledge from "../Pledge"
import { useSelector } from "react-redux"
import { selectPledges } from "../../reducers/pledgesReducer"

const Pledges = () => {
  const pledges = useSelector(selectPledges)

  return (
    <>
      <PledgesStyled>
        {
          pledges.map(pledge => 
            <Pledge 
              type={pledge.type} 
              min_amount={pledge.min_amount}
              description={pledge.description}
              spots_left={pledge.spots_left } />
          )
        }
      </PledgesStyled>
    </>
  )
}

export default Pledges
