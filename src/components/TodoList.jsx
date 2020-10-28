import React from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <div>
          <TodoListItem
            key={index}
            item={item}
            index={index}
            deleteList={this.props.deleteList}
            removeItem={this.props.removeItem}
            markTodoDone={this.props.markTodoDone}
            editTodo={this.props.editTodo}
            onEditSave={this.props.onEditSave}
            selectedItem={this.props.selectedItem}
          />
        </div>
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

export default TodoList;
