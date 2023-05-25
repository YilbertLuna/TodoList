import React, { useState } from "react";
import '../style/CreateTodo.css'

function CreateTodo({ addTodo }) {

    const [todoValue, setTodoValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(todoValue)
        setTodoValue('')
    };

    const onChangeValue = (e) => {
        setTodoValue(e.target.value)
    }

    return(
        <form onSubmit={onSubmit} className="form-create-todo">
            <input
            className="text-create-todo"
            placeholder="Crea una nueva tarea por hacer"
            value={todoValue}
            onChange={onChangeValue}
            />

            <button
            className="button-create-todo"
            disabled={todoValue ? '' : 'disabled'}
            >Crear</button>
        </form>
    )
}

export { CreateTodo }