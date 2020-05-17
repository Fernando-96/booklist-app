import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Book List</h1>
      <p>You currently have {books.length} book 📕 to read 📖 </p>
    </div>
  );
};

export default NavBar;
