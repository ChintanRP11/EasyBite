import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("Should load the Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load 3 text input boxes", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).toHaveLength(3);
  });

  it("Should load the input field name inside the Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load the input field email inside the Contact component", () => {
    render(<Contact />);

    const inputEmail = screen.getByPlaceholderText("Email");

    expect(inputEmail).toBeInTheDocument();
  });

  it("Should load the text area inside the Contact component", () => {
    render(<Contact />);

    const messageArea = screen.getByPlaceholderText("Message");

    expect(messageArea).toBeInTheDocument();
  });

  it("Should load the Submit button inside the Contact component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
});
