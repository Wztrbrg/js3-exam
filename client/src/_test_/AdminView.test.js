import { render, screen, fireEvent } from "@testing-library/react";
import AdminView from "../components/AdminView";

//John vill som admin kunna byta vy mellan böcker/användare
test("if user-table is displayed when clicking users-button", () => {
  render(<AdminView />);

  const usersBtn = screen.getByTestId("users-btn");
  fireEvent.click(usersBtn);
  const usersTable = screen.getByTestId("users-table");
  expect(usersTable).toBeInTheDocument();
});
