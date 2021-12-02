import styled from "styled-components"
import { colors } from "../../variables"

const ProgressBarStyled = styled.article`
  background-color: ${colors.exlight_grey};
  border-radius: 3.3rem;
  height: 1.2rem;
  width: 100%;

  div { 
    background-color: ${colors.moderate_cyan};
    border-radius: 3.3rem;
    height: 100%;
    width: ${({ percentage }) => `${percentage}%`};
  }
`

export default ProgressBarStyled