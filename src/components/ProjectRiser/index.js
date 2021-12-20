import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectIsBookmarked, toggleBookmark, toggleModal } from "../../reducers/uiReducer"
import { selectDefaultPledge, selectPledge } from "../../reducers/pledgesReducer"
import ProjectDescription from "../ProjectDescription"
import ProjectRiserStyled from "./ProjectRiserStyled"
import { PrimaryBtn, BookmarkBtn } from "../Button/ButtonStyled"
import ProjectIcon from "../../images/logo-mastercraft.svg"
import BookmarkIcon from "../../images/icon-bookmark.svg"
import BookmarkGreenIcon from "../../images/icon-bookmark-green.svg"
import { useWindowWidth } from "../../hooks"
import { motion } from "framer-motion"

const ProjectRiser = () => {
  const windowW = useWindowWidth()
  const dispatch = useDispatch()
  const isBookmarked = useSelector(selectIsBookmarked)
  const defaultPledge = useSelector(selectDefaultPledge)

  const multipleActions = () => {
    dispatch(toggleModal())
    dispatch(selectPledge(defaultPledge.uuid))
  }

  return (
    <motion.div>
      <ProjectRiserStyled>
        <img src={ProjectIcon} alt="Mastercraft Bamboo Project Icon" />
        <ProjectDescription />
        <div className="btns">
          <PrimaryBtn onClick={() => multipleActions()}>Back this project</PrimaryBtn>
          <BookmarkBtn onClick={() => dispatch(toggleBookmark())} isBookmarked={isBookmarked} windowW={windowW}>
           <img src={isBookmarked ? BookmarkGreenIcon : BookmarkIcon} alt="Bookmark Icon" />
          { windowW < 1200 ? "" :  <span>Bookmark</span> }
          </BookmarkBtn>
        </div>
      </ProjectRiserStyled>
    </motion.div>
  )
}

export default ProjectRiser
