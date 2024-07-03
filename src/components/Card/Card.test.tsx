import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("Card renders title correctly", () => {
  render(<Card title="Test Title" content={""} />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
});
