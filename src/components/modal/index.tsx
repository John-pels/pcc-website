import React, { FC, useEffect, useRef } from "react"
import {
  ModalBackground,
  Modal,
  ModalTextContent,
  ModalClose,
  Scrollable,
} from "./style"
import { AiOutlineClose } from "react-icons/ai"

import { ModalTypes } from "./types"
const CustomModal: FC<ModalTypes> = ({
  children,
  closeModal,
  show,
  bgColor,
  width,
  animation = true,
  padding,
}) => {
  const ref = useRef(null)

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === ref.current) {
      closeModal()
    }
  }

  return (
    <ModalBackground
      show={show}
      animation={animation}
      ref={ref}
      onClick={handleClose}
    >
      <Modal
        show={show}
        bgColor={bgColor}
        width={width}
        animation={animation}
        padding={padding}
      >
        <ModalClose onClick={closeModal}>
          <AiOutlineClose />
        </ModalClose>

        <ModalTextContent>
          <Scrollable>{children}</Scrollable>
        </ModalTextContent>
      </Modal>
    </ModalBackground>
  )
}

export default CustomModal
