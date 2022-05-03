import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onWrite = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onAdd}>
            <label>AGREGAR</label>
            <textarea 
                value={newTodoValue}
                onChange={onWrite}
                placeholder='Escribe tu Tarea'
            />

            <div className='TodoForm-buttonContainer'>
               <button 
                    onClick={onCancel}
                    type='button'
                    className='TodoForm-button TodoForm-button-cancel'
               >
                    Cancelar   
                </button>
                <button 
                    type='submit'
                    className='TodoForm-button TodoForm-button-add'
                >
                    Añadir   
                </button>
            </div>
        </form>
    );
}

export { TodoForm };