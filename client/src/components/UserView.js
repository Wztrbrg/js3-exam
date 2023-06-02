import { useState, useEffect, createRef } from "react";
import { fetchBooks, order } from "../service/bookService";
import Search from "./Search";

/*
Användarvy, renderas på LoginPage beroende på användarroll
hämtar böcker i useEffect som mappas ut i ett table 
hanterar ordrar med hjälp av tjänsten i bookService
*/
function UserView() {
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

  async function refreshBooks() {
    const result = await fetchBooks();
    setBooks(result.result);
  }

  async function orderHandler(book, amount) {
    order(book, amount);
    refreshBooks();
  }

  return (
    <section className="book-container">
      <header className="book-header">
        <nav className="book-nav">
          <Search setBooks={(books) => setBooks(books)}></Search>
        </nav>
      </header>
      <main>
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Availability</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              const ref = createRef();
              return (
                <>
                  <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.quantity} left</td>
                    {book.quantity <= 0 && (
                      <>
                        <td>
                          <input
                            type="number"
                            name="amount"
                            ref={ref}
                            className="order-input no-stock"
                            min="0"
                            max="20"
                            disabled
                          />
                          <button
                            className="order-btn no-stock"
                            disabled
                            onClick={() =>
                              order(book.title, ref.current.value)
                            }>
                            Order
                          </button>
                        </td>
                      </>
                    )}
                    {book.quantity > 0 && (
                      <>
                        <td>
                          <input
                            className="order-input"
                            type="number"
                            name="amount"
                            ref={ref}
                            min="0"
                            max="20"
                          />
                          <button
                            className="order-btn"
                            onClick={() =>
                              orderHandler(book.title, ref.current.value)
                            }>
                            Order
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </main>
    </section>
  );
}

export default UserView;
