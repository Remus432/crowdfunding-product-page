import styled from "styled-components"
import { spacing } from "../../variables"

const PledgesStyled = styled.section`
  article:not(last-of-type) {
    margin-bottom: ${spacing.medium};
  }
`

export default PledgesStyled