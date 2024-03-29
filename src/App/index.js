import React from 'react';
import { DarkModeProvider } from '../Context/ThemeContext.jsx'
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

//import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso', completed: false },
//   { text: 'Money', completed: false },
//   { text: 'watch anime', completed: false }
// ];


function App() {

  return (
    <TodoProvider>
        <DarkModeProvider>
          <AppUI />
        </DarkModeProvider>
    </TodoProvider>
  );
}

export default App;

//<TodoContext.Consumer></TodoContext.Consumer>