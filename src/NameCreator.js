import React, { useState } from "react";
import { connect } from "react-redux";
import addName from "./actions";

function NameCreator(props) {
  const [name, setName] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    props.addName(name);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="NameCreator">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type Name here..."
          autoFocus="on"
          className="form-control w-100"
          onChange={handleChange}
        />
        <input
          type="submit"
          placeholder="Add Name"
          className="btn btn-secondary"
        />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addName: (text) => dispatch(addName(text)),
  };
}

export default connect(null, mapDispatchToProps)(NameCreator);
