import styled from "styled-components"
import HeroBgDesktop from "../../images/image-hero-desktop.jpg"
import HeroBgMobile from "../../images/image-hero-mobile.jpg"
import { flexPos, bgImage } from "../../mixins"
import { spacing } from "../../variables"

const NavStyled = styled.nav`
  background-size: cover;
  background-repeat: no-repeat;
  padding: ${spacing.large} ${spacing.medium} 0 ${spacing.medium};
  height: 30rem;
  width: 100%;

  ${bgImage({ angle: "100deg", firstColor: "rgba(0, 0, 0, .6)", secondColor: "rgba(0, 0, 0, .1)", img: HeroBgMobile })};
  ${flexPos({ x: "space-between", y: "flex-start" })};

  @media (min-width: 1200px) {
    background-position: 50%;
    height: 40rem;
    padding: 4.8rem 16.6rem 0 16.6rem;

    ${bgImage({ angle: "100deg", firstColor: "rgba(0, 0, 0, .6)", secondColor: "rgba(0, 0, 0, .1)", img: HeroBgDesktop })};

    img:last-of-type {
      display: none;
    }
  }
`

export default NavStyled