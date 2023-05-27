import{ useEffect, useState } from "react";

function useLocalStorage(value, initialValue) {
    
    const [todos, setTodos] = useState(initialValue)

    useEffect(() => {
        
        setTimeout(() => {
            const localStorageTodos = localStorage.getItem(value)

            let parsedTodos;

            if(!localStorageTodos){
                localStorage.getItem(value, JSON.stringify(initialValue))
                parsedTodos = initialValue
            }else{
                parsedTodos = JSON.parse(localStorageTodos)
                setTodos(parsedTodos)
            }
        }, 3000)
        
    })

    const saveTodo = (item) => {
        localStorage.setItem(value, JSON.stringify(item))
        setTodos(item)
    }

    return{todos, saveTodo}
}

export { useLocalStorage }