import React, { useEffect } from 'react' 
import Nav from "./components/Nav"
import ProjectWrapper from "./components/ProjectWrapper"
import ProjectRiser from "./components/ProjectRiser"
import FundingProgress from './components/FundingProgress'
import AboutProject from "./components/AboutProject"
import PledgeModal from './components/PledgeModal'
import { useSelector } from "react-redux"
import { selectIsModalOn } from "./reducers/uiReducer"
import "./styles.scss"

function App() {
  const isModalOn = useSelector(selectIsModalOn)

  useEffect(() => {
    isModalOn ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
  }, [isModalOn])

  return (
    <div className={`App ${isModalOn ? "modal-on" : ""}`}>
      {isModalOn && <PledgeModal />}
      <Nav />
      <ProjectWrapper>
        <ProjectRiser />
        <FundingProgress />
        <AboutProject />
      </ProjectWrapper>
    </div>
  );
}

export default App;
