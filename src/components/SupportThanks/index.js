import React from 'react'
import SupportThanksStyled from "./SupportThanksStyled"
import CheckedIcon from "../../images/icon-check.svg"
import { PrimaryBtn } from "../Button/ButtonStyled"
import { useDispatch } from "react-redux"
import { togglePledgeBacked } from "../../reducers/uiReducer"

const SupportThanks = () => {
  const dispatch = useDispatch()

  return (
    <>
      <SupportThanksStyled>
        <img src={CheckedIcon} alt="" />
        <h3>Thanks for your support!</h3>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <PrimaryBtn onClick={() => dispatch(togglePledgeBacked())}>Got it!</PrimaryBtn>
      </SupportThanksStyled>
    </>
  )
}

export default SupportThanks
