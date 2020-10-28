import React from "react";
import TodoApp from "../src/components/TodoApp";
import "./App.css";

function App() {
  var todoItems = [];
  todoItems.push({ index: 1, value: "Pay credit card bill", done: false, edit: false, deleted: false });
  todoItems.push({ index: 2, value: "Go shopping", done: false, edit: false, deleted: false});
  todoItems.push({ index: 3, value: "Buy flowers for wife", done: true, edit: false, deleted: false });
  todoItems.push({ index: 4, value: "Buy Cake for birthday", done: false, edit: false, deleted: false });

  return (
    <div className="App">
      <TodoApp todoItems={todoItems} />
    </div>
  );
}

export default App;
