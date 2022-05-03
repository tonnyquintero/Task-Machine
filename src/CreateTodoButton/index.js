import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, openModal }) {

    const onClickButton = () => {
        if (openModal) {
            setOpenModal(false);
          } else {
            setOpenModal(true);
          }
    }

    return (
        <button 
            className='CreateTodoButton'
            onClick={() => onClickButton()}
        >
            +
        </button>
    );
}

export { CreateTodoButton }