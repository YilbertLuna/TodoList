import React from "react";

function CounterTodo({ total, completed }) {
    return(
        <p>tienes {total} tareas, y haz completado {completed}</p>
    )
}

export { CounterTodo }