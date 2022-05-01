import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className='TodoCounter'>
            Has Completado {completed} de {total} TODOS
        </h2>
    )
}

export { TodoCounter };