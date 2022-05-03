import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './TodoItem.css';

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <FcCheckmark />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}  
      >
        <AiOutlineCloseCircle color='red' />
      </span>
    </li>
  );
}

export { TodoItem };