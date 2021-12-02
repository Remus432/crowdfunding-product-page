import styled from "styled-components"
import { colors } from "../../variables"

const ProjectDescriptionStyled = styled.article`
  margin-bottom: 2.4rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  p {
    color: ${colors.dark_grey};
    font-size: 1.4rem;
  }
`

export default ProjectDescriptionStyled