import React from "react";
import '../style/TodoItem.css'

function TodoItem({ toggleCompletedTodos, deleteTodo, text, completed }) {

    return(
        <li className="Todo-Item-List">

            <button className="todo-completed" onClick={toggleCompletedTodos}>✔️</button>

            <p className={`item-list ${completed && "TodoItem-p--complete"}`}>{ text }</p>

            <button className="todo-deteled" onClick={deleteTodo}>❌</button>

        </li>
    )
}

export { TodoItem }