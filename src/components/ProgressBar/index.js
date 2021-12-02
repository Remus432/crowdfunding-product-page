import  React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectPercentageComplete, calcPercentage } from '../../reducers/fundingReducer'
import ProgressBarStyled from "./ProgressBarStyled"

const ProgressBar = () => {
  const percentageComplete = useSelector(selectPercentageComplete)
  const dispatch = useDispatch()

  useEffect(() => dispatch(calcPercentage()))

  return (
    <>
      <ProgressBarStyled percentage={percentageComplete}>
        <div></div>
      </ProgressBarStyled>
    </>
  )
}

export default ProgressBar
