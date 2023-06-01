async function fetchBooks() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
    },
  };

  let result = await fetch("http://127.0.0.1:3000/library/books", options);
  if (result.status === 200) {
    result = await result.json();
    return { result };
  }
}

async function order(book, amount) {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: book,
      quantity: amount,
    }),
  };

  let result = await fetch("http://127.0.0.1:3000/library/user/books", options);
}

export { fetchBooks, order };
