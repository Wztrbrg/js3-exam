import React from "react";
import { search } from "../service/searchService";

/*
Enkelt sökfält, använder sökfunktionen från searchService och sätter
sedan setBooks till resultatet så att endast sökresultaten mappas ut i book-table:n
*/

function Search({ setBooks, curView }) {
  async function changeHandler(e) {
    const query = e.target.value;
    setBooks(await search(query));
  }

  return (
    <input
      type="text"
      className={curView === "users" ? "hide" : ""}
      placeholder="Search..."
      onChange={changeHandler}
      data-testid="search"
    />
  );
}

export default Search;
