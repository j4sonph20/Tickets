import { configureStore } from "@reduxjs/toolkit";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const ticketReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectSeat": {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;
        console.log(totalPrice);
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;
      return { ...state, selectedSeats, totalPrice };
    }
    case "deleteSoghe": {
      const seadId = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seadId
      );
      const totalPrice=selectedSeats.reduce((result,item)=> result+item.gia,0)
      return { ...state, selectedSeats,totalPrice };
    }
    default:
      return state;
  }
};
const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export default store;
