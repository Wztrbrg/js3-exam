import React, { useState } from "react";
import {
  deleteBook,
  promoteUser,
  deleteUser,
  editBook,
  addBook,
} from "../service/adminService";
import "../style/modal.css";

/*
Modal/Pop-up fönster som används vid ändring av böcker/användare
använder tjänster från adminService för att utföra dom olika funktionerna
*/
function Modal({ action, item, hideModal, refreshAll }) {
  const [titleField, setTitleField] = useState("");
  const [authorField, setAuthorField] = useState("");
  const [quantityField, setQuantityField] = useState("");

  async function performAction() {
    if (action === "delete book") {
      await deleteBook(item.title);
    } else if (action === "delete user") {
      await deleteUser(item.username);
    } else if (action === "promote user") {
      await promoteUser(item.username);
    } else if (action === "edit book") {
      const newBook = {
        ...(titleField !== "" && { title: titleField }),
        ...(authorField !== "" && { author: authorField }),
        ...(quantityField !== "" && { quantity: quantityField }),
      };
      await editBook(item.title, newBook);
    } else if (action === "add book") {
      const newBook = {
        ...(titleField !== "" && { title: titleField }),
        ...(authorField !== "" && { author: authorField }),
        ...(quantityField !== "" && { quantity: quantityField }),
      };
      await addBook(newBook);
    }

    hideModal();
    refreshAll();
  }

  return (
    <>
      {(action === "delete book" ||
        action === "delete user" ||
        action === "promote user") && (
        <>
          <div className="bg-overlay">
            <div className="modal">
              <h2>{action.charAt(0).toUpperCase() + action.slice(1)}</h2>
              <p>
                Are you sure you wish to {action} {item?.title || item.username}
                ?
              </p>

              <div className="btn-container">
                <button onClick={performAction}>Proceed</button>
                <button onClick={hideModal} className="cancel">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {(action === "edit book" || action === "add book") && (
        <>
          <div className="bg-overlay">
            <div className="modal">
              <h2>{action.charAt(0).toUpperCase() + action.slice(1)}</h2>
              <div className="input-container">
                <p>Title - {item?.title}</p>
                <input
                  type="text"
                  name=""
                  placeholder="Insert new title..."
                  onChange={(e) => setTitleField(e.target.value)}
                />
              </div>
              <div className="input-container">
                <p>Author - {item?.author}</p>
                <input
                  type="text"
                  name=""
                  placeholder="Insert new author..."
                  onChange={(e) => setAuthorField(e.target.value)}
                />
              </div>
              <div className="input-container">
                <p>Quantity - {item?.quantity}</p>
                <input
                  type="text"
                  name=""
                  placeholder="Insert new quantity..."
                  onChange={(e) => setQuantityField(e.target.value)}
                />
              </div>
              <div className="btn-container">
                <button onClick={performAction}>Save changes</button>
                <button onClick={hideModal} className="cancel">
                  Discard changes
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
