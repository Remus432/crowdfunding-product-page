import { css } from "styled-components"
import { colors, spacing } from "../variables"

const flexPos = ({ x, y, flexdir }) => `
  align-items: ${y || "unset"};
  display: flex;
  flex-direction: ${flexdir || "row"};
  justify-content: ${x || "unset"};
`

const bgImage = ({ angle, firstColor, secondColor, img }) => `
  background-image: linear-gradient(${angle || 0}, ${firstColor || "transparent"}, ${secondColor || "transparent"}), url(${img});
`

const cardBasic = css`
  background-color: ${colors.white};
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: .8rem;
`

const pBasic = css`
  color: ${colors.dark_grey};
  font-size: 1.4rem;
  line-height: ${spacing.medium};
`

export { flexPos, bgImage, cardBasic, pBasic }
