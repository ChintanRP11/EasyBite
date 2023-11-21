jest.mock(
  "../../../public/images/logo.png",
  () => "../mockFiles/mock-logo.png"
);

import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component test cases", () => {
  it("Should render header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Online ●")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Grocery")).toBeInTheDocument();
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("toggles Login/Logout when clicked", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
