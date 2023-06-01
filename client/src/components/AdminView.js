function AdminView() {
  return (
    <h2>Admin</h2>
    // <section className="book-container">
    //   <header className="book-header">
    //     <nav className="book-nav"></nav>
    //   </header>
    //   <main>
    //     <table className="book-table">
    //       <thead>
    //         <tr>
    //           <th>Title</th>
    //           <th>Author</th>
    //           <th>Availability</th>
    //           <th>Order</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {books.map((book, index) => {
    //           const ref = createRef();
    //           return (
    //             <>
    //               <tr key={index}>
    //                 <td>{book.title}</td>
    //                 <td>{book.author}</td>
    //                 <td>{book.quantity}</td>
    //                 {book.quantity <= 0 && (
    //                   <>
    //                     <td>
    //                       <input
    //                         type="number"
    //                         name="amount"
    //                         ref={ref}
    //                         className="no-stock"
    //                         min="0"
    //                         max="20"
    //                         disabled
    //                       />
    //                     </td>
    //                     <td>
    //                       <button
    //                         className="no-stock"
    //                         disabled
    //                         onClick={() =>
    //                           order(book.title, ref.current.value)
    //                         }>
    //                         Order
    //                       </button>
    //                     </td>
    //                   </>
    //                 )}
    //                 {book.quantity > 0 && (
    //                   <>
    //                     <td>
    //                       <input
    //                         type="number"
    //                         name="amount"
    //                         ref={ref}
    //                         min="0"
    //                         max="20"
    //                       />
    //                     </td>
    //                     <td>
    //                       <button
    //                         onClick={() =>
    //                           orderHandler(book.title, ref.current.value)
    //                         }>
    //                         Order
    //                       </button>
    //                     </td>
    //                   </>
    //                 )}
    //               </tr>
    //             </>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </main>
    // </section>
  );
}

export default AdminView;
