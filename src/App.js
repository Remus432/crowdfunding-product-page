import React from 'react'
import { Provider } from "react-redux"
import { store } from "./store"
import Nav from "./components/Nav"
import ProjectWrapper from "./components/ProjectWrapper"
import ProjectRiser from "./components/ProjectRiser"
import FundingProgress from './components/FundingProgress'
import AboutProject from "./components/AboutProject"
import "./styles.scss"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <ProjectWrapper>
          <ProjectRiser />
          <FundingProgress />
          <AboutProject />
        </ProjectWrapper>
      </div>
    </Provider>
  );
}

export default App;
