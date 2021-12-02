import styled from "styled-components"
import { colors, spacing } from "../../variables"

const MenuStyled = styled.ul`
  display: none;

  @media (min-width: 1200px) {
    display: flex;

    li {
      list-style: none;

      &:not(:last-of-type) {
        margin-right: ${spacing.large};
      }

      a {
        color: ${colors.white};
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid ${colors.white};
        }
      }
    }
  }
`

export default MenuStyled