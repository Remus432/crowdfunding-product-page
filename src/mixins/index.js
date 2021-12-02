import { css } from "styled-components"
import { colors } from "../variables"

const flexPos = ({ x, y, flexdir }) => `
  align-items: ${y || "default"};
  display: flex;
  flex-direction: ${flexdir || "row"};
  justify-content: ${x || "default"};
`

const bgImage = ({ angle, firstColor, secondColor, img }) => `
  background-image: linear-gradient(${angle || 0}, ${firstColor || "transparent"}, ${secondColor || "transparent"}), url(${img});
`

const cardBasic = css`
  background-color: ${colors.white};
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: .8rem;
`

export { flexPos, bgImage, cardBasic }
