import styled from "styled-components"
import { pBasic, cardBasic, flexPos } from "../../mixins"
import { spacing, colors } from "../../variables"

const PledgeModalStyled = styled.section`
  height: 100%;
  position: fixed;
  left: 49.8vw;
  padding: ${spacing.large} ${spacing.medium};
  top: 0vh;
  transform: translateX(-50%);
  overflow-y: scroll;
  width: 98vw;
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

  @media (min-width: 375px) {
    width: 95vw;
  }

  @media (min-width: 1200px) {
    width: 73rem;
  }
`

export default PledgeModalStyled