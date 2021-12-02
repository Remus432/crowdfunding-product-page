import { useState, useEffect } from "react"

function useWindowWidth() {
  const [windowW, setWindowW] = useState(0)

  window.addEventListener("resize", () => {
    setWindowW(window.innerWidth)
  })

  useEffect(() => setWindowW(window.innerWidth), [windowW])

  return windowW
}

export { useWindowWidth }