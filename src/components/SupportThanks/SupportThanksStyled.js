import styled from "styled-components"
import { cardBasic, flexPos, pBasic } from "../../mixins"
import { colors, spacing } from "../../variables"

const SupportThanksStyled = styled.article`
  background-color: ${colors.white};
  padding: ${spacing.large};
  position: fixed;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 95%;
  max-width: 54rem;
  z-index: 3;

  ${cardBasic};
  ${flexPos({ y: "center", flexdir: "column" })};

  & > *:not(:last-child) {
    margin-bottom: ${spacing.medium};
  }

  p {
    ${pBasic};
  }
`

export default SupportThanksStyled