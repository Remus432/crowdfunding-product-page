import styled from "styled-components"
import { pBasic, cardBasic, flexPos } from "../../mixins"
import { spacing, colors } from "../../variables"

const PledgeModalStyled = styled.section`
  height: 100%;
  position: fixed;
  left: 49.5vw;
  padding: ${spacing.large} ${spacing.medium};
  top: 0vh;
  transform: translateX(-50%);
  overflow-y: scroll;
  width: 32.7rem;
  z-index: 2;

  &::-webkit-scrollbar {
    background-color: ${colors.dark_cyan};
    border-radius: .8rem;
    opacity: .5;
    width: .8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.moderate_cyan};
    border-radius: .8rem;
  }

  ${cardBasic};

  img {
    cursor: pointer;
  }

  div {
    &:not(:first-child) {
      ${flexPos({ x: "space-between", y: "flex-start", flexdir: "column" })};
    }
  }

  .modal-info {
    margin-bottom: ${spacing.medium};
    ${flexPos({ x: "space-between", y: "center" })};
  }

  .description {
    margin-bottom: ${spacing.medium};
  }

  p {
    ${pBasic};
  }

  @media (min-width: 1200px) {
    width: 73rem;

    
  }
`

export default PledgeModalStyled