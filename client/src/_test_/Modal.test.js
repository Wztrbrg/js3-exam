import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";

//John vill som admin kunna ändra bokuppgifter
//med hjälp av en "modal"
test("Test if edit modal displays", () => {
  render(<Modal action={"edit book"} item={{ title: "Harry potter" }}></Modal>);

  const modalText = screen.getByText("Edit book");

  expect(modalText).toBeInTheDocument();
});
