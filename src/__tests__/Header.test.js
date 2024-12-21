import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header test cases", () => {
  it("Should render Header page header Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const logInButton = screen.getByRole("button", { name: "Login" });
    expect(logInButton).toBeInTheDocument();
  });

  it("Should load Header page Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });

  it("Should load toggle login/logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const logInButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(logInButton);
    const logOutButton = screen.getByRole("button", { name: "Logout" });
    expect(logOutButton).toBeInTheDocument();
  });
});
