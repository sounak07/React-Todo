import React from "react";

function TodoItem(props) {
  return (
    <div
      className={props.todo.completed ? "text-strike todo-item" : "todo-item"}
    >
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={props.changed}
      />
      <p>{props.todo.text}</p>
    </div>
  );
}

export default TodoItem;
