/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedState = prevState.todos.map(todo => {
        if (todo.id == id) todo.completed = !todo.completed;

        return todo;
      });

      return {
        todos: updatedState
      };
    });
  }

  render() {
    const todos = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        todo={item}
        changed={this.handleChange.bind(this, item.id)}
      />
    ));

    return <div className="todo-list">{todos}</div>;
  }
}

export default App;
