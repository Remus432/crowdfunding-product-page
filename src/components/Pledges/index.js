import React from 'react'
import PledgesStyled from "./PledgesStyled"
import Pledge from "../Pledge"
import { useSelector } from "react-redux"
import { selectPledges, selectDefaultPledge } from "../../reducers/pledgesReducer"
import PledgeAccordion from '../PledgeAccordion'

const Pledges = ({ isModal = false }) => {
  const pledges = useSelector(selectPledges)
  const defaultPledge = useSelector(selectDefaultPledge)

  return (
    <>
      <PledgesStyled>
        { isModal && 
            <PledgeAccordion 
              isModal 
              hasNoReward 
              uuid={defaultPledge.uuid}
              pledge_type={defaultPledge.type}
              description={defaultPledge.description} /> }
        {
          pledges.map((pledge, i) => 
            isModal ?
            <PledgeAccordion 
              key={i}
              uuid={pledge.uuid}
              pledge_type={pledge.type} 
              min_amount={pledge.min_amount}
              description={pledge.description}
              spots_left={pledge.spots_left } /> :
            <Pledge 
              key={i}
              uuid={pledge.uuid}
              pledge_type={pledge.type} 
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
