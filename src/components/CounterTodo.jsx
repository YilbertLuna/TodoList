import React from "react";
import '../style/CounterTodo.css'

function CounterTodo({ total, completed }) {
    return(
        <p className="counter-todo">tienes {total} tareas, y haz completado {completed}</p>
    )
}

export { CounterTodo }