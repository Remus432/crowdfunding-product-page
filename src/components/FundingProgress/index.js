import React from 'react'
import { useSelector } from "react-redux"
import { selectGoalAmount, selectBackedAmount, selectTotalBackers, selectDaysLeft } from "../../reducers/fundingReducer"
import ProgressBar from "../ProgressBar"
import FundingProgressStyled from "./FundingProgressStyled"

const FundingProgress = () => {
  const goalAmount = useSelector(selectGoalAmount)
  const backedAmount = useSelector(selectBackedAmount)
  const totalBackers = useSelector(selectTotalBackers)
  const daysLeft = useSelector(selectDaysLeft)

  return (
    <>
      <FundingProgressStyled>
        <article>
          <div>
            <span>${backedAmount.toLocaleString("en-us")}</span>
            <span>of ${goalAmount.toLocaleString("en-us")} backed</span>
          </div>
          <div>
            <span>{totalBackers.toLocaleString("en-us")}</span>
            <span>total backers</span>
          </div>
          <div>
            <span>{daysLeft}</span>
            <span>days left</span>
          </div>
        </article>
        <ProgressBar />
      </FundingProgressStyled>
    </>
  )
}

export default FundingProgress
