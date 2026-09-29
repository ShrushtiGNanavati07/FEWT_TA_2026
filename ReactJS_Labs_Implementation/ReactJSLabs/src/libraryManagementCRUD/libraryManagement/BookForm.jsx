import { useState } from "react";

function BookForm({ addBook }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || author === "") {
      alert("Please enter all details");
      return;
    }

    addBook({
      title: title,
      author: author
    });

    setTitle("");
    setAuthor("");
  };

  return (
    <div className="form-box">

      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">
          Add Book
        </button>

      </form>

    </div>
  );
}

export default BookForm;