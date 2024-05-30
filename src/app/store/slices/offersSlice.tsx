import offerStatus from "@/app/constants/offerStatus";
import { createSlice } from "@reduxjs/toolkit";

export interface Offer {
  value: number;
  status: offerStatus;
}

export interface OffersInitialStateInterface {
  offer: Offer | undefined;
}

const initialState: OffersInitialStateInterface = {
  offer: undefined,
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export const { setOffer } = offersSlice.actions;

export default offersSlice.reducer;
