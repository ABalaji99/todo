import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";






const TodoList = ({ todos, handleDelete, handleEdit }) => {

  
  return (
    <ol className="allTodos">
      {todos.map((t,index) => (
        <div className="listblock" key={index}>
            <li className="singleTodo" >
          <span className="todoText" key={t.id}>
           {t.todo}
          </span>
        </li>
        <span className="btns">
        
          <button onClick={() => handleEdit(t.id)}><FaEdit/></button>
          <button onClick={() => handleDelete(t.id)}><RiDeleteBin5Fill/></button>
          </span>
        </div>
      
      ))}
    </ol>
  );
};

export default TodoList;
