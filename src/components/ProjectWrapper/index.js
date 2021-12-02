import React from 'react'
import ProjectWrapperStyled from "./ProjectWrapperStyled"

const ProjectWrapper = ({ children }) => {
  return (
    <>
      <ProjectWrapperStyled>
        { children }
      </ProjectWrapperStyled>
    </>
  )
}

export default ProjectWrapper
