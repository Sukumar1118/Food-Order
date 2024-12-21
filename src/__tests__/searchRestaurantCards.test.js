import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCards.mock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("SearchRestaurantCards", () => {
  it("should search burger text in restuarants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInput = screen.getByTestId("search-bar");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(2);
  });
});
