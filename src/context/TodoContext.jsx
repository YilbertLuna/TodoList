import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const appContext = createContext()

function Context({ children }) {

    const {
        todos,
        loadoing,
        saveTodo,
    } = useLocalStorage('TODOS_Value', [])


    const totalTodos = todos.length
    const completeTodos = todos.filter(item => !!item.completed).length

    const toggleCompletedTodos = (text) => {
        const todo = [...todos]
        const todoIndex = todo.findIndex((todo) => todo.text === text)
        if(todo[todoIndex].completed === false) todo[todoIndex].completed = true
        else todo[todoIndex].completed = false
        saveTodo(todo)
    }

    const deleteTodo = (text) => {
        const todo = [...todos]
        const todoIndex = todo.findIndex((todo) => todo.text === text)
        if(todo[todoIndex].completed === true) todo.splice(todoIndex, 1)
        saveTodo(todo)
    }

    const addTodo = (text) => {
        const newTodo = [...todos]
        newTodo.push({
        text,
        completed: false,
        })
        saveTodo(newTodo)
    }

    return(
        <appContext.Provider value={{
            todos,
            loadoing,
            totalTodos,
            completeTodos,
            addTodo,
            toggleCompletedTodos,
            deleteTodo,
        }}>
            {children}
        </appContext.Provider>
    )
}

export { appContext, Context}