import React from "react";
import "./Input.css";

export default function Input() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Enter city.. "
          className="searchForm"></input>
        <input type="submit" value="search" className="submitForm"></input>
      </form>
    </div>
  );
}
