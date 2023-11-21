import { screen, render, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mockFiles/mockResList.json";
import "@testing-library/jest-dom";
import { act } from "react-test-renderer";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should render body component with search", async () => {
  // render body component - mock fetch function - wrap it in act
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // initial restaurant cards
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(12);

  // find search button
  const searchBtn = screen.getByRole("button", { name: "Search" });

  // find search input box
  const searchInput = screen.getByTestId("searchInput");

  // fire onChangeEvent on input box
  fireEvent.change(searchInput, { target: { value: "sub" } });

  // verify input box has new value or not
  const changedInput = screen.getByTestId("searchInput");
  // expect(changedInput).toHaveValue("sub");

  // click on search button
  fireEvent.click(searchBtn);

  // get all cards and verify length
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(7);
});
