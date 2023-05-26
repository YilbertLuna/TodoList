import { useState } from "react";

function useLocalStorage() {
    const localStorageTodos = localStorage.getItem('TODOS_Value')

    let parsedtTodos;
        
    if(!localStorageTodos) {
        localStorage.getItem('TODOS_Value', JSON.stringify([]))
        parsedtTodos = []
    }else parsedtTodos = JSON.parse(localStorageTodos)

    const [todos, setTodos] = useState(parsedtTodos)

    const saveTodo = (item) =>{
        localStorage.setItem('TODOS_Value', JSON.stringify(item))
        setTodos(item)
    }

    return{todos, saveTodo}
}

export { useLocalStorage }