import React from "react";
import '../style/ListTodo.css'

function ListTodo({ children }) {
    return(
        <ul className="listTodo">
            { children }
        </ul>
    )
}

export { ListTodo }