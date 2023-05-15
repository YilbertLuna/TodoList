import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import { CounterTodo } from "./components/CounterTodo";
import { ListTodo } from "./components/ListTodo";
import { TodoItem } from "./components/TodoItem";


function App() {
  return (
    <div>

      <CreateTodo/>

      <CounterTodo/>

      <ListTodo>
        <TodoItem/>
      </ListTodo>

    </div>
  );
}

export default App;
