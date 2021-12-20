import styled from "styled-components"
import { cardBasic } from "../../mixins"
import { colors, spacing } from "../../variables"

const MenuStyled = styled.ul`
  display: none;
  position: fixed;
  left: 50vw;
  top: 32vh;
  transform: translate(-50%, -50%);
  width: 90vw;
  z-index: 4;

  ${cardBasic};

  &.menu-on {
    display: unset;
  }

  li {
    font-weight: 500;
    padding: ${spacing.medium};

    &:not(:last-of-type) {
      border-bottom: 1px solid ${colors.light_grey};
    }

    a {
      color: ${colors.black};
    }
  }

  @media (min-width: 1200px) {
    background: unset;
    border: unset;
    display: flex;
    position: relative;
    left: unset;
    top: unset;
    transform: unset;
    width: unset;
    z-index: 1;

    li {
      padding: 0;

      &:not(:last-of-type) {
        border: unset;
        margin-right: ${spacing.large};
      }

      a {
        color: ${colors.white};

        &:hover {
          border-bottom: 1px solid ${colors.white};
        }
      }
    }
  }
`

export default MenuStyled