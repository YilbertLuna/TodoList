import React from "react";
import '../style/CounterTodo.css'

function CounterTodo({ total, completed }) {
    return(
        <>
            <p className="counter-todo">Tareas: {total}</p>
            <p className="counter-todo">Completadas: {completed}</p>
        </>
    )
}

export { CounterTodo }