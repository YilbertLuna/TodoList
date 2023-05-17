import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import { CounterTodo } from "./components/CounterTodo";
import { ListTodo } from "./components/ListTodo";
import { TodoItem } from "./components/TodoItem";

function App() {

  const defaultTodos = [
    {text: 'create App Todos', completed: true},
    {text: 'aprender en el proceso', completed: false},
  ]

  const totalTodos = defaultTodos.length
  const completedTodos = defaultTodos.filter(item => !!item.completed).length

  return (
    <div>

      <CreateTodo/>

      <CounterTodo total={totalTodos} completed={completedTodos}/>

      <ListTodo>
        {defaultTodos.map((item) => (
          <TodoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </ListTodo>

    </div>
  );
}

export default App;
