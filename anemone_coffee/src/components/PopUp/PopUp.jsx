// ModalComponent.jsx
import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <div>
        <button onClick={onRequestClose}>Fermer</button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
