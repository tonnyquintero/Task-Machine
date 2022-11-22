import React, {useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext.jsx'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {

    const { darkMode } = useContext(ThemeContext);
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <>
            <h1 className={darkMode ? 'black' : 'white'}>Bienvenidos a Task Machine 📓</h1>
            <h2 className={darkMode ? 'TodoCounter' : 'TodoCounterDark'}>
                Has Completado {completedTodos} de {totalTodos} Tareas
            </h2>
        </>
    )

}

export { TodoCounter };