import styled from "styled-components"
import { cardBasic, flexPos } from "../../mixins"
import { colors, spacing } from "../../variables"

const FundingProgressStyled = styled.section`
  padding: ${spacing.large} ${spacing.medium} ${spacing.exlarge} ${spacing.medium};
  margin-top: -2rem;

  ${cardBasic};
  ${flexPos({ y: "center", flexdir: "column" })};

  div {
    ${flexPos({ y: "center", flexdir: "column" })};

    &:nth-of-type(2) {
      border-bottom: 1px solid ${colors.light_grey};
      border-top: 1px solid ${colors.light_grey};
      padding: ${spacing.medium} 0;
      margin: ${spacing.medium} 0;
    }

    &:last-of-type {
      margin-bottom: ${spacing.large};
    }
  }

  span:first-child {
    font-size: ${spacing.large};
    font-weight: 700;
    margin-bottom: ${spacing.exsmall};
  }

  span:last-of-type {
    color: ${colors.dark_grey};
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    padding: 4.8rem;

    article:first-child {
      margin-bottom: 3.7rem;
      width: 100%;

      ${flexPos({ x: "flex-start", y: "center", flexdir: "row" })};
    }

    div {
      &:nth-of-type(2) {
        border: none;
        border-left: 1px solid ${colors.light_grey};
        border-right: 1px solid ${colors.light_grey};
        padding: 0 ${spacing.exlarge};
        margin: 0 ${spacing.exlarge};
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

export default FundingProgressStyled