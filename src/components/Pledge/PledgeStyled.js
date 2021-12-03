import styled from "styled-components"
import { colors, spacing } from "../../variables"
import { cardBasic, pBasic, flexPos } from "../../mixins"

const PledgeStyled = styled.article`
  padding: ${spacing.medium};
  opacity: ${({spots_left}) => `${spots_left > 0 ? 1 : .5}`};

  ${cardBasic};

  & > *:not(:last-child) {
    margin-bottom: ${spacing.medium};
  } 

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
    margin-bottom: ${spacing.medium};

    span {
      color: ${colors.dark_grey};
      font-size: 1.4rem;
      font-weight: 400;
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

export default PledgeStyled;