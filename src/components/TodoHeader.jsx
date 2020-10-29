import React from "react";

class TodoHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "#999" }}>Todo List</h1>
        {/* <ul className="uk-subnav uk-subnav-pill">
          <li
            onClick={() => handleChangeStatus("all")}
            className={status === "all" ? "uk-active" : ""}
          >
            <a>All</a>
          </li>
          <li
            onClick={() => handleChangeStatus("active")}
            className={status === "active" ? "uk-active" : ""}
          >
            <a>Active</a>
          </li>
          <li
            onClick={() => handleChangeStatus("completed")}
            className={status === "completed" ? "uk-active" : ""}
          >
            <a>Completed</a>
          </li>
        </ul> */}
        {/* <p> Following features supported by our TODO List</p>
        <p>
          • Each To-Do in the list consist of To-Do Label and To-Do Priority.{" "}
        </p>
        <p>
          • User should also be able to perform the CRUD operations over the
          ToDo List.{" "}
        </p>{" "}
        <p>
          • Keyboard accessible to do list. User should be able to use the next
          and previous arrow to switch between the To-Do list.{" "}
        </p>
        <p>
          • User should be able to select the multiple To-Dos and able to delete
          the To-Dos using delete key.{" "}
        </p>
        <p>
          • Inline Editing of To-Do Item should be supported. User should be
          able to double click on the To-Do list item to perform the editing of
          the existing To-Do Item.
        </p> */}
      </div>
    );
  }
}

export default TodoHeader;
