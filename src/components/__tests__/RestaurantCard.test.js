import { render, screen } from "@testing-library/react";

import RestaurantCard from "../RestaurantCard";
import MOCK_RES_DATA from "../mockFiles/restaurantCardMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Restaurant Card test cases", () => {
  it("Should render restaurant card", () => {
    render(
      <BrowserRouter>
        <RestaurantCard resData={MOCK_RES_DATA} />
      </BrowserRouter>
    );

    const resName = screen.getByText("Subway");
    const ratings = screen.getByText("8.6 Stars");
    const deliveryTime = screen.getByText("21 mins");
    expect(resName).toBeInTheDocument();
    expect(ratings).toBeInTheDocument();
    expect(deliveryTime).toBeInTheDocument();
  });
});
