import styled from "styled-components"
import { spacing } from "../../variables"

const ProjectWrapperStyled = styled.section`
  padding: 0 2.4rem;
  padding-bottom: 7.6rem;
  margin: auto;
  transform: translateY(-5rem);

  section:not(:first-child) {
    margin-top: ${spacing.medium};
  }

  @media (min-width: 1200px) {
    max-width: 76.8rem;
    transform: translateY(-8rem);
  }
`

export default ProjectWrapperStyled;