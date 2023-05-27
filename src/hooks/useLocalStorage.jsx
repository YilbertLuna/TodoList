import{ useEffect, useState } from "react";

function useLocalStorage(value, initialValue) {
    
    const [todos, setTodos] = useState(initialValue)
    const [loadoing, setLoaging] =useState(true)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageTodos = localStorage.getItem(value)

                let parsedTodos;

                if(!localStorageTodos){
                    localStorage.getItem(value, JSON.stringify(initialValue))
                    parsedTodos = initialValue
                }else{
                    parsedTodos = JSON.parse(localStorageTodos)
                    setTodos(parsedTodos)
                }

                setLoaging(false)
            } catch (error) {
                setLoaging(false)
            }
        }, 3000)
        
    })

    const saveTodo = (item) => {
        localStorage.setItem(value, JSON.stringify(item))
        setTodos(item)
    }

    return{todos, loadoing, saveTodo}
}

export { useLocalStorage }