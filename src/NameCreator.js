import Recat, { useState } from "react";
import { connect } from "react-redux";
import addName from "./actions";

function NameCreator(props) {
  const [change, setChange] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addName(change);
    setChange("");
  }

  function handleChange(event) {
    setChange(event.target.value);
  }

  return (
    <div className="NameCreator">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type Name here..."
          autoFocus="on"
          className="w-100 form-control"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Add Names"
          className=" w-100 btn btn-secondary"
        />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addName: (text) => dispatch(addName(text))
  }
}

export default connect(null, mapDispatchToProps)(NameCreator);
