import { useState, useEffect, createRef } from "react";
import { order } from "../service/bookService";
import Modal from "./Modal";
import Search from "./Search";

/*
Adminvy, renderas på LoginPage beroende på användarroll
hämtar både users och böcker i useEffect för att mappa ut båda i varsit table,
kan byta mellan user/book-vy 
använder Modal-komponenten för att hantera ändringar av böcker/användare
*/
function AdminView() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState([]);
  const [curView, setCurView] = useState("books");
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchAll() {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
        },
      };

      let bookResult = await fetch(
        "http://127.0.0.1:3000/library/books",
        options
      );
      let userResult = await fetch(
        "http://127.0.0.1:3000/admin/users",
        options
      );
      if (bookResult.status === 200 && userResult.status === 200) {
        bookResult = await bookResult.json();
        userResult = await userResult.json();
        setBooks(bookResult);
        setUser(userResult);
      }
    }

    fetchAll();
  }, []);

  async function refreshAll() {
    async function fetchAll() {
      const options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
        },
      };

      let bookResult = await fetch(
        "http://127.0.0.1:3000/library/books",
        options
      );
      let userResult = await fetch(
        "http://127.0.0.1:3000/admin/users",
        options
      );
      if (bookResult.status === 200 && userResult.status === 200) {
        bookResult = await bookResult.json();
        userResult = await userResult.json();
        setBooks(bookResult);
        setUser(userResult);
      }
    }

    fetchAll();
  }

  async function orderHandler(book, amount) {
    order(book, amount);
    refreshAll();
  }

  function viewHandler(view) {
    setCurView(view);
  }

  function toggleModal(action, query) {
    setShowModal(true);
    setAction(action);
    setQuery(query);
  }

  function hideModal() {
    setShowModal(false);
  }

  return (
    <section className="book-container">
      <header className="book-header">
        <nav className="book-nav">
          <Search
            setBooks={(books) => setBooks(books)}
            curView={curView}></Search>
          <section className="nav-btn-container">
            <button
              onClick={() => viewHandler("books")}
              className={curView === "books" ? "active" : ""}>
              Books
            </button>
            <button
              data-testid="users-btn"
              onClick={() => viewHandler("users")}
              className={curView === "users" ? "active" : ""}>
              Users
            </button>
          </section>
        </nav>
      </header>
      {showModal && (
        <Modal
          data-testid="modal"
          action={action}
          item={query}
          hideModal={hideModal}
          refreshAll={refreshAll}
        />
      )}
      <main>
        {curView === "books" && (
          <table className="book-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>
                  <section className="availability-container">
                    Availability
                    <button
                      className="add-book-btn"
                      onClick={() => toggleModal("add book")}>
                      Add new book
                    </button>
                  </section>
                </th>
                <th>Order</th>
                <th>Action</th>
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
                          <td>
                            <button
                              data-testid="edit-btn"
                              onClick={() => toggleModal("edit book", book)}
                              className="action-btn">
                              Edit
                            </button>
                            <button
                              onClick={() => toggleModal("delete book", book)}
                              className="action-btn delete">
                              Delete
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
                          <td>
                            <button
                              onClick={() => toggleModal("edit book", book)}
                              className="action-btn">
                              Edit
                            </button>
                            <button
                              onClick={() => toggleModal("delete book", book)}
                              className="action-btn delete">
                              Delete
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
        )}

        {curView === "users" && (
          <table className="user-table" data-testid="users-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Purchases</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>
                      {user.purchases ? user.purchases.length : 0} purchases
                    </td>
                    <td>
                      <button
                        onClick={() => toggleModal("promote user", user)}
                        className="order-btn">
                        Promote
                      </button>
                      <button
                        onClick={() => toggleModal("delete user", user)}
                        className="action-btn delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </main>
    </section>
  );
}

export default AdminView;
