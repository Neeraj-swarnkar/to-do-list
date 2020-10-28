import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";
import "../App.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: props.todoItems, deleteList: [] };
  }
  addItem = todoItem => {
    this.state.todoItems.unshift({
      index: this.state.todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
      edit: false,
      deleted: false
    });
    this.setState({ todoItems: this.state.todoItems });
  };

  selectedItem = items => {
    // console.log("selectedItem items ", items);
    // this.state.todoItems.splice(itemIndex, 1);
    // this.setState({ todoItems: this.state.todoItems });
  };

  removeItem = itemIndex => {
    this.state.todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: this.state.todoItems });
  };
  onSelectedDelete = itemIndex => {
    let deleteListValues = this.state.deleteList;
    let todo = this.state.todoItems;
    deleteListValues.forEach(function(value, index) {
      todo.splice(value, 1);
    });

    this.setState({ todoItems: todo });
  };
  markTodoDone = itemIndex => {
    var todo = this.state.todoItems[itemIndex];
    this.state.todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done
      ? this.state.todoItems.push(todo)
      : this.state.todoItems.unshift(todo);
    this.setState({ todoItems: this.state.todoItems });
  };

  editTodo = itemIndex => {
    var todo = this.state.todoItems[itemIndex];
    todo.edit = !todo.edit;
    this.setState({ todoItems: this.state.todoItems });
  };

  onEditSave = (value, itemIndex) => {
    var todo = this.state.todoItems[itemIndex];
    this.state.todoItems.splice(itemIndex, 1);
    todo.edit = !todo.edit;
    todo.value = value;
    todo.done = false;
    todo.index = itemIndex;
    let val = this.state.todoItems;
    val.push(todo);
    this.setState({ todoItems: val });
  };

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList
          items={this.props.todoItems}
          deleteList={this.state.deleteList}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
          editTodo={this.editTodo}
          onEditSave={this.onEditSave}
          selectedItem={this.selectedItem}
        />
        <TodoForm
          addItem={this.addItem}
          onSelectedDelete={this.onSelectedDelete}
        />
        <TodoFooter />
      </div>
    );
  }
}

export default TodoApp;
