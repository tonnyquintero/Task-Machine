import React, { useContext } from 'react';
import Interruptor from '../App/Interruptor.jsx'
import { ThemeContext } from '../Context/ThemeContext.jsx'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Footer } from '../Footer';
import { TodosLoading } from '../TodosLoading';
import { AiFillFire } from "react-icons/ai";
import './App.css'


function AppUI() {

  const {darkMode} = useContext(ThemeContext)

  const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return (    
      <React.Fragment>
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
        <Interruptor />
        <TodoCounter />  
        <TodoSearch />

        <TodoList>
            {error && <p>Desespérate!!! Hubo un Error</p>}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <> <p>Crea Tu Primera Tarea!</p>
            <AiFillFire className='icono-flama' />
            <AiFillFire className='icono-flama' />
            <AiFillFire className='icono-flama' />
            <AiFillFire className='icono-flama' />
            <AiFillFire className='icono-flama' />
            <AiFillFire className='icono-flama' /> </>}
      
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
              ))}
        </TodoList>

       {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
       )}

        <CreateTodoButton 
          setOpenModal={setOpenModal} openModal={openModal}
        />
        <Footer />
        </div>
      </React.Fragment>
    );
}

export { AppUI };