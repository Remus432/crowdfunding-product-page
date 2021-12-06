import React from 'react'
import Pledges from '../Pledges'
import PledgeModalStyled from './PledgeModalStyled'
import CloseIcon from "../../images/icon-close-modal.svg"
import { toggleModal } from "../../reducers/uiReducer"
import { useDispatch } from "react-redux"

const PledgeModal = () => {
  const dispatch = useDispatch()

  return (
    <>
      <PledgeModalStyled>
        <div className="modal-info">
          <h2>Back this project</h2>
          <img onClick={() => dispatch(toggleModal())} src={CloseIcon} alt="Close Modal" />
        </div>
        <p className="description">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <Pledges isModal />
      </PledgeModalStyled>
    </>
  )
}

export default PledgeModal
