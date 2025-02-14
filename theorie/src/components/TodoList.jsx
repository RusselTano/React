import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

const TodoList = ({
  todoList,
  deleteTodo,
  toggleTodoDone,
  toggleTodoEdit,
  editTodo,
  selectTodo,
}) => {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            editTodo={(content) => editTodo(todo.id, content)}
            cancelTodo={() => toggleTodoEdit(todo.id)}
          />
        ) : (
          <TodoItem
            key={todo.id} 
            todo={todo}
            deleteTodo={deleteTodo} //1ere methode celle que je prefere
            toggleTodoDone={toggleTodoDone} //2ieme methode
            toggleTodoEdit={toggleTodoEdit}
            selectTodo={selectTodo}
          />
        )
      )}
    </ul>
  ) : (
    <p>Veuillez entrez une tache</p>
  );
};

export default TodoList;
