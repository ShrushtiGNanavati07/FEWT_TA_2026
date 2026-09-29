import { useEffect, useState } from "react";
import Login from "./app";

const API = "https://6aab8f45ea0e22daa6dc5148.mockapi.io/Books";

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);

  // GET ALL BOOKS
  const getBooks = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  // DELETE BOOK
  const deleteBook = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() => {
      getBooks();
    });
  };

  useEffect(() => {
    if (user) {
      getBooks();
    }
  }, [user]);

  // LOGIN PAGE
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <h1>Library Management System</h1>

      <h2>Welcome {user.username}</h2>

      <button onClick={() => setUser(null)}>
        Logout
      </button>

      <hr />

      {user.role === "Librarian" ? (
        <>
          <h2>Librarian Page</h2>

          {books.map((book) => (
            <div key={book.id}>
              <p>
                {book.id} - {book.title} - {book.author}
              </p>

              <button onClick={() => deleteBook(book.id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>User Page</h2>

          {books.map((book) => (
            <div key={book.id}>
              <p>
                {book.id} - {book.title} - {book.author}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;