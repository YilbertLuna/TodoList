import React, { useContext } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { CounterTodo } from "./components/CounterTodo";
import { ListTodo } from "./components/ListTodo";
import { TodoItem } from "./components/TodoItem";
import { LoadoingTodos } from "./components/LoadingTodos";
import { NoneTodo } from "./components/NoneTodo";
import { appContext } from "./context/TodoContext";

function Appui() {
    const {
        todos,
        loadoing,
        totalTodos,
        completeTodos,
        toggleCompletedTodos,
        deleteTodo,
      } = useContext(appContext)
    
      return (
        <>
          <CreateTodo/>
    
          <ListTodo>

            {loadoing && (<LoadoingTodos/>) }
            
            {(!loadoing && todos.length === 0) ? <NoneTodo/> : todos.map((item) => (
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