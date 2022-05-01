import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';

function AppUI() {
  const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
    } = React.useContext(TodoContext);

    return (    
      <React.Fragment>
        <TodoCounter />  
        <TodoSearch />

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