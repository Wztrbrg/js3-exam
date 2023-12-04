import { useEffect, useState } from "react";
import Search from "./Search";

/*
Gästvy, renderas på BookPage beroende på användarroll
hämtar böcker i useEffect som sedan mappas ut i ett table
*/
function GuestView() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
    };

    async function fetchBooks() {
      let result = await fetch(
        "https://book-store-nwa5.onrender.com/library/books",
        options
      );
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
        <nav className="book-nav">
          <Search setBooks={(books) => setBooks(books)}></Search>
        </nav>
      </header>
      <main>
        <table className="book-table" data-testid="book-table">
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
                  <td>{book.quantity} left</td>
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
