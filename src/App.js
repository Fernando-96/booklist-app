import React from "react";
import BookContextProvider from "./Context/BookContext";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
