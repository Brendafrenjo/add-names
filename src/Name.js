import React from "react";

export default function Name(props) {
  return (
    <div>
      <div>{props.name}</div>
      <button>Delete</button>
    </div>
  );
}
