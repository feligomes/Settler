import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";
import { EnhancedStore } from "@reduxjs/toolkit";
import PartyA from "./PartyA";
import offerStatus from "@/app/constants/offerStatus";
import { setOffer } from "@/app/store/slices/offersSlice";

interface State {
  offers: {
    offer: {
      value: number;
      status: offerStatus;
    };
  };
}

const mockStore = configureStore<State>([]);
const initialState: State = {
  offers: {
    offer: {
      value: 100,
      status: offerStatus.UNANSWERED,
    },
  },
};

describe("PartyA Component", () => {
  let store: MockStore<State> | EnhancedStore<State>;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("renders the component correctly", () => {
    render(
      <Provider store={store}>
        <PartyA />
      </Provider>
    );
  });

  it("handles input change correctly", () => {
    render(
      <Provider store={store}>
        <PartyA />
      </Provider>
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 200 } });
    expect(input).toHaveValue("200");
  });

  it("dispatches setOffer action on submit", () => {
    render(
      <Provider store={store}>
        <PartyA />
      </Provider>
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 200 } });

    const button = screen.getByRole("button", { name: /Offer/i });
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(
      setOffer({ value: 200, status: offerStatus.UNANSWERED })
    );
  });
});
