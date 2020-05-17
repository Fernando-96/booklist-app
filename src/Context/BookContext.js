import React, { createContext, useState, useEffect } from "react";

import uuid from "uuid/dist/v4";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("books");
    if (localData) {
      setBooks(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addbook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  //remove book from array
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addbook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
