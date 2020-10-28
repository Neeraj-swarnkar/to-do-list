import React from "react";
import "../App.css";

class TodoListItem extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      editVal: "",
      isChecked: false
    };
  }
  onClickClose = () => {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  };
  onClickDone = () => {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  };
  selectedItem = event => {
    // const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });

    if (event.target.checked) {
      var index = parseInt(this.props.index);
      this.props.deleteList.push(index);
      this.props.selectedItem(this.props.deleteList);
      // this.setState({
      //   isChecked: false
      // });
    }
  };
  _handleDoubleClickItem = event => {
    var index = parseInt(this.props.index);
    this.props.editTodo(index);
  };

  handleChange = event => {
    this.setState({ editVal: event.target.value });
  };
  onEditClose = () => {
    var index = parseInt(this.props.index);
    this.props.editTodo(index);
  };
  onEditSave = () => {
    var index = parseInt(this.props.index);
    this.props.onEditSave(this.state.editVal, index);
    this.setState({
      editVal: ""
    });
  };

  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    const nonEditMode = (
      <li
        className="list-group-item "
        onDoubleClick={this._handleDoubleClickItem}
      >
        <div className={todoClass}>
          <input
            id={"todo-" + this.props.index}
            name="isChecked"
            type="checkbox"
            className="form-check-input"
            onChange={this.selectedItem}
          />
          <span
            style={{ margin: "0px 15px 0px 30px" }}
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          ></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
    const editMode = (
      <li className="list-group-item ">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder={this.props.item.value}
            onChange={this.handleChange}
          />

          <span
            className="glyphicon glyphicon-remove"
            aria-hidden="true"
            onClick={this.onEditClose}
            style={{ marginLeft: "5px", marginRight: "15px", marginTop: "5px" }}
          ></span>

          <span
            className="glyphicon glyphicon-ok"
            aria-hidden="true"
            onClick={this.onEditSave}
          ></span>
        </div>
      </li>
    );

    var editSection = this.props.item.edit ? editMode : nonEditMode;

    return editSection;
  }
}

export default TodoListItem;
