import LoginPage from "../page/LoginPage";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//John vill se ett formulär att logga in med
test("Login form exists", () => {
  render(<LoginPage />, { wrapper: BrowserRouter });
  const loginForm = screen.getByTestId("login-form");

  expect(loginForm).toBeInTheDocument();
});
