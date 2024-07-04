import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("Card renders title correctly", () => {
  render(<Card title="Test Title" content={""} />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
});

test("Card renders content correctly", () => {
  render(<Card content="Test Content" title={""} />);
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

test("Card is disabled when disabled prop is true", () => {
  render(<Card disabled={true} title={""} content={""} />);
  const cardElement = screen.getByTestId("CardElement");
  expect(cardElement).toHaveStyle("cursor: not-allowed");
  expect(cardElement).toHaveStyle("opacity: 0.5");
});

test("Card renders image correctly", () => {
  render(
    <Card
      image="https://th.bing.com/th/id/OIP.gqM6Q75Z6RO1jvvf1k4oHgHaE8?rs=1&pid=ImgDetMain"
      title={""}
      content={""}
    />
  );
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute(
    "src",
    "https://th.bing.com/th/id/OIP.gqM6Q75Z6RO1jvvf1k4oHgHaE8?rs=1&pid=ImgDetMain"
  );
});
