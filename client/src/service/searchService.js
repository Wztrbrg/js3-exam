async function search(query) {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("JWT_TOKEN"),
      "Content-Type": "application/json",
    },
  };

  let result = await fetch(
    "https://book-store-nwa5.onrender.com/library/books/search?q=" + query,
    options
  );
  if (result.status === 200) {
    result = await result.json();
    return result;
  }
}

export { search };
