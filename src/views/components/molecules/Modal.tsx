import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/molecules.scss';
interface Iprops {
  closeModal: () => void;
  children: any;
}
const Modal = ({ closeModal, children }: Iprops) => {
  return (
    <div
      className='modal-component'
      onClick={(e: any) => {
        if (!e.target.closest('.modal-content')) {
          closeModal();
        } else if (e.target.closest('.close-modal')) {
          closeModal();
        } else {
          console.log('modal-content');
        }
      }}
    >
      <div className='modal-content'>{children}</div>
    </div>
  );
};

export default Modal;
