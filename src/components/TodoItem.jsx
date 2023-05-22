import React from "react";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import '../style/TodoItem.css'

function TodoItem({ toggleCompletedTodos, deleteTodo, text, completed }) {

    return(
        <li className="Todo-Item-List">

            <span onClick={toggleCompletedTodos}> <AiOutlineCheck className={`todo-completed ${completed && 'true'}`}/> </span>

            <p className={`item-list ${completed && "TodoItem-p--complete"}`}>{ text }</p>

            <span onClick={deleteTodo}> <AiOutlineClose className={`todo-deleted ${completed && 'delete'}`}/> </span>

        </li>
    )
}

export { TodoItem }