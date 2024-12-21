import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
  test("Should load Contact page header", () => {
    render(<Contact />);
    const header = screen.getAllByRole("heading");
    expect(header[0]).toBeInTheDocument();
  });

  test("Should load Contact page description", () => {
    render(<Contact />);
    const header = screen.getAllByRole("heading");
    expect(header[1]).toBeInTheDocument();
  });
});
