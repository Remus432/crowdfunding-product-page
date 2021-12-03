import styled from "styled-components"
import { colors } from "../../variables"
import { flexPos } from "../../mixins"

const BasicBtn = styled.button`
  border: none;
  border-radius: 3.3rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  transition: all .4s ease;
`

const PrimaryBtn = styled(BasicBtn)`
  background-color: ${colors.moderate_cyan};
  color: ${colors.white};
  padding: 1.6rem 4rem;

  &:active {
    background-color: ${colors.dark_cyan};
  }

  @media (min-width: 1200px) {
    &:hover {
      background-color: ${colors.dark_cyan};
    }
  }
`

const DisabledBtn = styled(BasicBtn)`
  background-color: ${colors.dark_grey};
  color: ${colors.white};
  cursor: not-allowed;
  padding: 1.6rem 4rem;
`

const BookmarkBtn = styled(BasicBtn)`
  background-color: ${({isBookmarked}) => `${isBookmarked ? `rgba(20, 122, 115, .1)` : `${colors.light_grey}`}`};
  color: ${({isBookmarked}) => `${isBookmarked ? `${colors.dark_cyan}` : `${colors.dark_grey}`}`};
  line-height: 0;
  padding-right: ${({windowW}) => `${windowW < 1200  ? "0" : "11.8rem"}`};
  position: relative;

  ${flexPos({ y: "center" })};

  span {
    position: absolute;
    top: 50%;
    left: 62.5%;
    transform: translate(-50%, -50%);
  }

  &:hover > img {
    filter: ${({isBookmarked}) => `${isBookmarked ? "" 
    : "invert(47%) sepia(0%) saturate(78%) hue-rotate(260deg) brightness(100%) contrast(150%)"}`};
  }
`

export { PrimaryBtn, DisabledBtn, BookmarkBtn }