import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        
   <React.Fragment>
   <TodoCounter
     total={totalTodos}
     completed={completedTodos}
   />
     
   <TodoSearch
     searchValue={searchValue}
     setSearchValue={setSearchValue}
   />

   <TodoList>
      {error && <p>Desespérate, Hubo un Error</p>}
      {loading && <p>Estamos Cargando, No  Desesperes...</p>}
      {(!loading && !searchedTodos.length) && <p>Crea Tu Primer Todo!</p>}

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

   <CreateTodoButton />
  </React.Fragment>
    );
}

export { AppUI };