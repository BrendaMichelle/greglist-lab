import React from "react";
import Search from "./Search";

function Header({ onSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmit={onSubmit} />
    </header>
  );
}

export default Header;
