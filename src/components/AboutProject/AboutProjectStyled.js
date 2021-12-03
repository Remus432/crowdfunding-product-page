import styled from "styled-components"
import { cardBasic, pBasic } from "../../mixins"
import { spacing } from "../../variables"

const AboutProjectStyled = styled.section`
  padding: ${spacing.medium};

  ${cardBasic};

  h2 {
    font-size: 2rem;
    margin-bottom: ${spacing.medium};
  }

  p {
    margin-bottom: ${spacing.medium};

    ${pBasic};
  }

  @media (min-width: 1200px) {
    padding: ${spacing.exlarge};

    h2 {
      margin-bottom: 3.5rem;
    }
  }
`

export default AboutProjectStyled