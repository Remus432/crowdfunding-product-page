import styled from "styled-components"
import { flexPos } from "../../mixins"
import { colors, spacing } from "../../variables"

const ProjectRiserStyled = styled.section`
  background-color: ${colors.white};
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: .8rem;
  padding: 0 ${spacing.medium} 4.2rem ${spacing.medium};
  position: relative;
  transform: translateY(-5rem);

  ${flexPos({ y: "center", flexdir: "column" })};

  & > img {
    transform: translateY(-50%);
  }

  .btns { 
    width: 100%;

    ${flexPos({ x: "space-around" })};

    button:first-child {
      margin-right: ${spacing.exsmall};
    }
  }

  @media (min-width: 1200px) {
    transform: translateY(-8rem);
  }
`

export default ProjectRiserStyled