import styled from "styled-components"
import { colors, spacing } from "../../variables"
import { cardBasic, pBasic, flexPos } from "../../mixins"

const PledgeStyled = styled.article`
  &.selected {
    border: 2px solid ${colors.moderate_cyan};
  }

  padding: ${spacing.medium};

  &:not(:first-child) {
    opacity: ${({spots_left}) => `${spots_left > 0 ? 1 : .5}`};
  }

  ${cardBasic};

  // & > *:not(:last-child) {
  //   margin-bottom: ${spacing.medium};
  // } 

  .paragraph {
    ${pBasic};
  }

  h3 {
    margin-bottom: .8rem;

    & + span {
      color: ${colors.moderate_cyan};
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .spots {
    color: ${colors.black};
    font-size: ${spacing.large};
    font-weight: 700;
    // margin-bottom: ${spacing.medium};

    span {
      color: ${colors.dark_grey};
      font-size: 1.4rem;
      font-weight: 400;
      margin-left: .8rem;
    }
  }

  @media (min-width: 1200px) {
    padding: ${spacing.exlarge};
    padding-top: 3.8rem;

    div {
      ${flexPos({ x: "space-between", y: "center" })};
    }

    .spots {
      margin-bottom: 0;
    }
  }
`

const PledgeAccordionStyled = styled(PledgeStyled)`
  .pledge-type {
    ${flexPos({ y: "center" })};

    &:hover {
      color: ${colors.moderate_cyan};
    }

    h3 {
      font-size: 1.4rem;
    }
  }

  .select-pledge {
    display: none;

    &:checked + .radio-btn::before {
      opacity: 1;
    }

    &:checked + .radio-btn {
      border: 2px solid ${colors.moderate_cyan};
    }
  }

  .enter-pledge {
    display: none!important;
  }

  .pledge-description {
    margin: ${spacing.medium} 0;

    &.empty {
      margin-top: ${spacing.medium};
      margin-bottom: 0;
    }
  }

  .radio-btn {
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 2.4rem;
    position: relative;
    margin-right: ${spacing.small};
    width: 2.4rem;

    &::before {
      background-color: ${colors.moderate_cyan};
      border-radius: 50%;
      content: "";
      height: 50%;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: opacity .4s ease;
      width: 50%;
    }
  }

  .spots {
    font-size: 1.8rem;

    span {
      font-size: 1.5rem;
    }
  }
`

export { PledgeStyled, PledgeAccordionStyled };