import React from "react";
import { connect } from "react-redux";
import Name from "/.Name.js";

function NameContainer(props) {
  {
    const listNames = props.names.map((name, index) => (
      <Name name={name} key={index} />
    ));

    return (
      <div className="styles">
        <h2>Type Names Below:</h2>
        {listNames}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { names: state.name };
}

export default connect(mapStateToProps)(NameContainer);
