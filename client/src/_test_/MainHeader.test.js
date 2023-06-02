import { render, screen } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import BookPage from "../page/BookPage";

//John vill som inloggad, kunna logga ut
test("Test if sign out button exists if logged in", () => {
  const user = {
    username: "John",
    password: "123",
    role: "ADMIN",
  };

  render(
    <BrowserRouter>
      <UserContext.Provider value={{ user }}>
        <BookPage />
      </UserContext.Provider>
    </BrowserRouter>
  );

  const signOutBtn = screen.getByText("Sign out");

  expect(signOutBtn).toBeInTheDocument();
});
