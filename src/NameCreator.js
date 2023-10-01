import React, { useState } from "react";

export default function NameCreator() {
  const [name, setName] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    name();
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
