import React from 'react'
import ProjectWrapperStyled from "./ProjectWrapperStyled"
import { motion } from "framer-motion"

const ProjectWrapper = ({ children }) => {
  return (
    <motion.div
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ ease: "easeInOut", stiffness: 150, duration: 1.2, staggerChildren: 1 }}>
      <ProjectWrapperStyled>
        { children }
      </ProjectWrapperStyled>
    </motion.div>
  )
}

export default ProjectWrapper
