import React from "react";
import Book from "../assets/book.svg";

function AppBook() {
  return (
    <div className="absolute w-64 md:w-80 lg:w-96">
      <img
        src={Book}
        alt="book"
      />
    </div>
  );
}

export default AppBook;
