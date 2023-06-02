import React from "react";
import GuestView from "../components/GuestView";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//John vill som gäst se en tabell med böcker
test("if book-table is rendered for guest", () => {
  render(<GuestView />, { wrapper: BrowserRouter });
  const bookTable = screen.getByTestId("book-table");

  expect(bookTable).toBeInTheDocument();
});
