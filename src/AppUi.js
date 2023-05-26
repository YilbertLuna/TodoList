import React, { useContext } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { CounterTodo } from "./components/CounterTodo";
import { ListTodo } from "./components/ListTodo";
import { TodoItem } from "./components/TodoItem";
import { appContext } from "./context/TodoContext";

function Appui() {
    const {
        todos,
        totalTodos,
        completeTodos,
        toggleCompletedTodos,
        deleteTodo,
      } = useContext(appContext)
    
      return (
        <>
    
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
    
        </>
    );
}

export { Appui }