import React from "react";
import Book from "../assets/book.svg";

function AppBook() {
  return (
    <div className="app__book">
      <img
        src={Book}
        alt="book"
      />
    </div>
  );
}

export default AppBook;
