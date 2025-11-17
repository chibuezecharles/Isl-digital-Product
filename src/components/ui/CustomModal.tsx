import Modal from "react-modal";
import React from "react";

const customStyles = {
  content: {
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: "1000px",
    maxHeight: "100vh",
    overflow: "auto",
    borderRadius: "12px",
    padding: "0",
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 10,
    backdropFilter: "blur(4px)",
    transition: "background-color 0.3s ease",
    overflow: "auto",
  },
};

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomModal({
  isOpen,
  onClose,
  children,
}: CustomModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="w-full h-full flex justify-center items-center overflow-y-auto rounded-lg">
        {children}
      </div>
    </Modal>
  );
}
