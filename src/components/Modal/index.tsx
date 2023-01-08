import React from "react";
import { GrFormClose } from "react-icons/gr";
import { ModalBox, ModalCloseBtn, ModalContent, ModalOverlay, ModalTitle, ModalWrapper } from "./style";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const overlayRef = React.useRef(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.target === overlayRef.current) {
        onClose();
    }
  }

  return isOpen ? (
    <ModalWrapper>
      <ModalOverlay
      ref={overlayRef}
      onClick={handleOverlayClick}
      >
        <ModalBox>
          <ModalCloseBtn onClick={onClose}>
            <GrFormClose />
          </ModalCloseBtn>
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{children}</ModalContent>
        </ModalBox>
      </ModalOverlay>
    </ModalWrapper>
  ) : null;
};
