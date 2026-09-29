import { useState } from "react";

function BookList({
  books,
  user,
  updateBook,
  deleteBook,
  issueBook,
  cancelIssue
}) {

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  // START EDIT
  const startEdit = (book) => {
    setEditId(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  // SAVE EDIT
  const saveEdit = (id) => {

    updateBook(id, {
      title: editTitle,
      author: editAuthor
    });

    setEditId(null);
  };

  return (
    <div>

      <h2>Book List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>

            {/* Only Librarian sees Action */}
            {user.role === "Librarian" && (
              <th>Action</th>
            )}
          </tr>
        </thead>

        <tbody>

          {books.map((book) => (

            <tr key={book.id}>

              <td>{book.id}</td>

              <td>
                {editId === book.id ? (
                  <input
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                  />
                ) : (
                  book.title
                )}
              </td>

              <td>
                {editId === book.id ? (
                  <input
                    value={editAuthor}
                    onChange={(e) =>
                      setEditAuthor(e.target.value)
                    }
                  />
                ) : (
                  book.author
                )}
              </td>

              <td>

                {book.isIssued ? (
                  <span className="issued">
                    Issued
                  </span>
                ) : (
                  <span className="available">
                    Available
                  </span>
                )}

              </td>

              {/* LIBRARIAN ACTIONS */}
              {user.role === "Librarian" && (

                <td>

                  {editId === book.id ? (

                    <button
                      onClick={() => saveEdit(book.id)}
                    >
                      Save
                    </button>

                  ) : (

                    <button
                      onClick={() => startEdit(book)}
                    >
                      Edit
                    </button>

                  )}

                  <button
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>

                  {!book.isIssued ? (

                    <button
                      onClick={() => issueBook(book.id)}
                    >
                      Issue
                    </button>

                  ) : (

                    <button
                      onClick={() => cancelIssue(book.id)}
                    >
                      Cancel
                    </button>

                  )}

                </td>

              )}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default BookList;