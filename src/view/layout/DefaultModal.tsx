import { Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const MainModal: React.FC = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MainModal