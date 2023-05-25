import LoginForm from "../page/LoginForm";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

test("Login form exists", () => {
  render(<LoginForm />);
  const loginForm = screen.getByTestId("login-form");

  expect(loginForm).toBeInTheDocument();
});
