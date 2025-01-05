import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Contact = () => {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }

  return (
    <div>
      <h1>Todo list</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList />
    </div>
  );
};

export default Contact;
