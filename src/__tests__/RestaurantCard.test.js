import { render, screen } from "@testing-library/react";
import {
  RestaurantCard,
  withLabelPromotedRestaurantCard,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCard.mock.json";
import "@testing-library/jest-dom";

describe("RestaurantCard test cases", () => {
  test("should load RestaurantCard", () => {
    render(<RestaurantCard resName={MOCK_DATA} />);
    const restaurantCardName = screen.getByText("Chinese Wok");
    expect(restaurantCardName).toBeInTheDocument();
  });

  test("should load RestaurantCard promoted", () => {
    const WrappedComponent = withLabelPromotedRestaurantCard(RestaurantCard);
    render(<WrappedComponent resName={MOCK_DATA} />);
    const restaurantCardName = screen.getByText("Promoted");
    expect(restaurantCardName).toBeInTheDocument();
  });
});
