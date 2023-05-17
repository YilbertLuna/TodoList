import React from "react";
import '../style/TodoItem.css'

function TodoItem({ text, completed }) {
    return(
        <li className="Todo-Item-List">

            <button className="todo-completed" type="">✔️</button>

            <p className={`item-list ${completed && "TodoItem-p--complete"}`}>{ text }</p>

            <button className="todo-deteled">❌</button>

        </li>
    )
}

export { TodoItem }