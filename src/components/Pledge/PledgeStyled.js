import styled from "styled-components"
import { colors, spacing } from "../../variables"
import { cardBasic, pBasic, flexPos } from "../../mixins"

const PledgeStyled = styled.article`
  &.selected {
    border: 2px solid ${colors.moderate_cyan};

    .enter-pledge {
      ${flexPos({ x: "center", y: "center", flexdir: "column" })};
    }
  }

  padding: ${spacing.medium};

  &:not(:first-child) {
    opacity: ${({spots_left}) => `${spots_left > 0 ? 1 : .5}`};
  }

  ${cardBasic};

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

    span {
      color: ${colors.dark_grey};
      font-size: 1.4rem;
      font-weight: 400;
      margin-left: .8rem;
    }
  }

  @media (min-width: 1200px) {
    padding-top: 3.3rem;

    &.selected {
      .enter-pledge {
        ${flexPos({ x: "center", y: "center", flexdir: "row" })};
      }
    }

    div {
      ${flexPos({ x: "space-between", y: "center" })};
    }

    .spots {
      margin-bottom: 0;
    }
  }
`

const PledgeAccordionStyled = styled(PledgeStyled)`
  padding: 0;
  position: relative;

  .alert {
    border: 1px solid red!important;
  }

  & > *:not(:last-of-type) {
    padding: 0 ${spacing.medium};
  }

  padding-top: ${spacing.medium};

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
    border-top: 1px solid ${colors.light_grey};
    padding: ${spacing.medium};
    display: none;
  }

  .pledge-group {
    margin-top: ${spacing.small};
    width: 100%;
    ${flexPos({ x: "space-between", y: "center" })};

    .input-group {
      border: 1px solid rgba(0, 0, 0, .15);
      border-radius: 3.3rem;
      padding: ${spacing.small};
      width: 10rem;

      &.focused {
        border: 1px solid ${colors.dark_cyan};
      }

      ${flexPos({ y: "center" })};

      span {
        color: ${colors.light_grey};
        font-weight: 700;
        margin-right: .8rem;
      }

      input { 
        border: none;
        caret-color: ${colors.dark_cyan};
        font-size: 1.4rem;
        font-weight: 700;
        width: 5rem;
      }
    }
  }

  .pledge-description {
    margin: ${spacing.medium} 0;

    &.empty {
      margin-top: ${spacing.medium};
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
    padding-left: ${spacing.medium};
    margin-bottom: ${spacing.medium};

    span {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    .pledge-type {
      h3 {
        margin-bottom: 0;
        margin-right: ${spacing.small};
      }
    }

    .enter-pledge {
      p {
        width: 100%;
      }
    }

    .pledge-group {
      ${flexPos({ x: "flex-end", y: "center", flexdir: "row" })};

      .input-group {
        margin-right: ${spacing.small};
      }
    }

    .spots {
      position: absolute;
      right: ${spacing.medium};
      top: ${spacing.medium};
    }
  }
`

export { PledgeStyled, PledgeAccordionStyled };