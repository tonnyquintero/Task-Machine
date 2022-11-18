import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {


    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <>
            <h1>Bienvenidos a Task Machine</h1>
            <h2 className='TodoCounter'>
                Has Completado {completedTodos} de {totalTodos} Tareas
            </h2>
        </>
    )

}

export { TodoCounter };