import React, { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { CounterTodo } from "./components/CounterTodo";
import { ListTodo } from "./components/ListTodo";
import { TodoItem } from "./components/TodoItem";
import './style/App.css'
const defaultTodos = [
  {text: 'create App Todos', completed: false},
  {text: 'aprender en el proceso', completed: false},
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)

  const totalTodos = todos.length
  const completeTodos = todos.filter(item => !!item.completed).length

  // funcion para marcar las tareas como completadas
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

  return (
    <div>

      <CreateTodo/>

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
