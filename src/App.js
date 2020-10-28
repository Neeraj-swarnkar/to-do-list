import React from "react";
import TodoApp from "../src/components/TodoApp";
import "./App.css";

function App() {
  var todoItems = [];
  todoItems.push({ index: 1, value: "learn react", done: false, edit: false  });
  todoItems.push({ index: 2, value: "Go shopping", done: true, edit: false});
  todoItems.push({ index: 3, value: "buy flowers", done: true, edit: false });

  return (
    <div className="App">
      <TodoApp todoItems={todoItems} />
    </div>
  );
}

export default App;
