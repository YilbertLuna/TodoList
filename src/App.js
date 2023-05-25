import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import { CounterTodo } from "./components/CounterTodo";
import { ListTodo } from "./components/ListTodo";
import { TodoItem } from "./components/TodoItem";
import { useLocalStorage } from "./hooks/useLocalStorage";
import './style/App.css'

function App() {

  const [todos, setTodos] = useLocalStorage('TODOS_Value')

  const totalTodos = todos.length
  const completeTodos = todos.filter(item => !!item.completed).length

  const toggleCompletedTodos = (text) => {
    const todo = [...todos]
    const todoIndex = todo.findIndex((todo) => todo.text === text)
    if(todo[todoIndex].completed === false) todo[todoIndex].completed = true
    else todo[todoIndex].completed = false
    setTodos(todo)
  }

  const deleteTodo = (text) => {
    const todo = [...todos]
    const todoIndex = todo.findIndex((todo) => todo.text === text)
    if(todo[todoIndex].completed === true) todo.splice(todoIndex, 1)
    setTodos(todo)
  }

  const addTodo = (text) => {
    const newTodo = [...todos]
    newTodo.push({
      text,
      completed: false,
    })
    setTodos(newTodo)
  }

  return (
    <div>

      <CreateTodo addTodo={addTodo}/>

      <ListTodo>
        {todos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            toggleCompletedTodos={() => toggleCompletedTodos(item.text)}
            deleteTodo={() => deleteTodo(item.text)}
          />
        ))}

        <CounterTodo total={totalTodos} completed={completeTodos}/>
      </ListTodo>

    </div>
  );
}

export default App;