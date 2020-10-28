import React from "react";
import "../App.css";

class TodoForm extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  componentDidMount() {}

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    var newItemValue = this.state.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.setState({
        value: ""
      });
    }
  };

  onSelectedDelete = event => {
    event.preventDefault();
    this.props.onSelectedDelete();
  };
  render() {
    return (
      <div className="input-group mb-3">
        <form onSubmit={this.onSubmit} className="form-inline">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add a new todo..."
            aria-label="Add a new todo"
          />
          <div className="input-group-append" style={{ marginTop: "10px" }}>
            <button
              className="btn btn-light"
              type="submit"
              id="button-addon2"
              aria-pressed="true"
            >
              Add
            </button>
          </div>
          <div
            className="input-group-append"
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            <button
              className="btn btn-light"
              type="button"
              id="button-remove"
              onClick={this.onSelectedDelete}
              aria-pressed="false"
            >
              Remove Selected
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
