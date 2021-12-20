import React from 'react'
import { PrimaryBtn } from "../Button/ButtonStyled"
import { PledgeAccordionStyled } from '../Pledge/PledgeStyled'  
import { useDispatch, useSelector } from "react-redux"
import { selectPledge, selectCurrentPledge } from '../../reducers/pledgesReducer'

const PledgeAccordion = ({ isModal = false, pledge_type, min_amount, spots_left, uuid, description, hasNoReward }) => {
  const dispatch = useDispatch()
  const currentPledge = useSelector(selectCurrentPledge)


  return (
    <>
      <PledgeAccordionStyled className={`${currentPledge === uuid ? "selected" : ""}`} spots_left={spots_left}>
        <div className="pledge-type">
          <div className="input-group">
            <input 
              onClick={e => dispatch(selectPledge(e.target.id))} 
              id={uuid} name="pledge" 
              className="select-pledge" 
              type="radio" 
              disabled={spots_left === 0}
              checked={currentPledge === uuid} />
            <label className="radio-btn" htmlFor={uuid}></label>
          </div>
          <div className="pledge-limit">
            <a href={`#${uuid}`}></a>
            <h3>{pledge_type}</h3>
            <span>{isModal ? "" : `Pledge $${min_amount} or more`}</span>
          </div>
        </div>
        <p className={`pledge-description ${hasNoReward ? "empty" : ""}`}>
          { description }
        </p>
        <p className="spots">{!hasNoReward && <>{spots_left}<span>left</span></>}</p>
        <div className="enter-pledge">
          <p>Enter your pledge</p>
          <div className="pledge-group">
            <div class="input-group">
              <span>$</span>
              <input 
                onFocus={e => e.target.parentElement.classList.add("focused")} 
                onBlur={e => e.target.parentElement.classList.remove("focused")} 
                min="25"
                defaultValue={min_amount}
                type="number" />
            </div>
            <PrimaryBtn>Continue</PrimaryBtn>
          </div>
        </div>
      </PledgeAccordionStyled>
    </>
  )
}

export default PledgeAccordion
