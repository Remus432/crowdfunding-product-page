import React, { useEffect } from 'react' 
import Nav from "./components/Nav"
import ProjectWrapper from "./components/ProjectWrapper"
import ProjectRiser from "./components/ProjectRiser"
import FundingProgress from './components/FundingProgress'
import AboutProject from "./components/AboutProject"
import PledgeModal from './components/PledgeModal'
import SupportThanks from './components/SupportThanks'
import { useSelector } from "react-redux"
import { selectIsMenuOn, selectIsModalOn, selectIsPledgeBacked } from "./reducers/uiReducer"
import "./styles.scss"

function App() {
  const isModalOn = useSelector(selectIsModalOn)
  const isMenuOn = useSelector(selectIsMenuOn)
  const isPledgeBacked = useSelector(selectIsPledgeBacked)

  useEffect(() => {
    isModalOn || isPledgeBacked || isMenuOn ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
  }, [isModalOn, isPledgeBacked, isMenuOn])

  return (
    <main className={`App ${isModalOn || isPledgeBacked ? "modal-on" : ""} ${isMenuOn ? "menu-on" : ""}`}>
      {isModalOn && <PledgeModal />}
      {isPledgeBacked && <SupportThanks /> }
      <Nav />
      <ProjectWrapper>
        <ProjectRiser />
        <FundingProgress />
        <AboutProject />
      </ProjectWrapper>
    </main>
  );
}

export default App;
