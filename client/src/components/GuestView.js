import { useEffect, useState } from "react";

function GuestView() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
    };

    async function fetchBooks() {
      let result = await fetch("http://127.0.0.1:3000/library/books", options);
      if (result.status === 200) {
        result = await result.json();
        setBooks(result);
      } else {
        console.log("Error");
      }
    }

    fetchBooks();
  }, []);

  return (
    <section className="book-container">
      <header className="book-header">
        <nav className="book-nav"></nav>
      </header>
      <main>
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default GuestView;
