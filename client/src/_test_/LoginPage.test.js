import LoginPage from "../page/LoginPage";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

test("Login form exists", () => {
  render(<LoginPage />);
  const loginForm = screen.getByTestId("login-form");

  expect(loginForm).toBeInTheDocument();
});
