import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PartyB from "./PartyB";
import { setOffer } from "@/app/store/slices/offersSlice";
import offerStatus from "../constants/offerStatus";

const mockStore = configureStore([]);

describe("PartyB Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      offers: {
        offer: {
          value: 100,
          status: offerStatus.UNANSWERED,
        },
      },
    });

    store.dispatch = jest.fn();
  });

  it("renders the status message correctly", () => {
    render(
      <Provider store={store}>
        <PartyB />
      </Provider>
    );

    expect(screen.getByText(/Received an offer from Party A of 100\$/)).toBeInTheDocument();
  });

  it("renders no offers message if no offer exists", () => {
    store = mockStore({
      offers: {
        offer: null,
      },
    });

    render(
      <Provider store={store}>
        <PartyB />
      </Provider>
    );

    expect(screen.getByText(/No offers received/)).toBeInTheDocument();
  });

  it("dispatches setOffer with DISAGREED status on Disagree button click", () => {
    render(
      <Provider store={store}>
        <PartyB />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Disagree/));

    expect(store.dispatch).toHaveBeenCalledWith(
      setOffer({
        value: 100,
        status: offerStatus.DISAGREED,
      })
    );
  });

  it("dispatches setOffer with AGREED status on Agree button click", () => {
    render(
      <Provider store={store}>
        <PartyB />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Agree/));

    expect(store.dispatch).toHaveBeenCalledWith(
      setOffer({
        value: 100,
        status: offerStatus.AGREED,
      })
    );
  });
});
