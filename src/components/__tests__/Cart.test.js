import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/store/appStore";
import "@testing-library/jest-dom";
import MOCK_DATA_MENU from "../mockFiles/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";

jest.mock(
  "../../../public/images/logo.png",
  () => "../mockFiles/mock-logo.png"
);

jest.mock(
  "../../../public/images/logo-bnw.png",
  () => "../mockFiles/mock-logo-bnw.png"
);

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_MENU),
  });
});

it("Should add items to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const accordianHeader = screen.getByText("Oven Special Pizzas (8)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(8);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[2]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
});

it("Should render items in the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  const foodItemsWithCart = screen.getAllByTestId("foodItem");
  expect(foodItemsWithCart.length).toBe(2);

  fireEvent.click(screen.getByText("Clear Cart"));
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  expect(
    screen.getByText("Cart is empty. Add some items to cart.")
  ).toBeInTheDocument();
});
