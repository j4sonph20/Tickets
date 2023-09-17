import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Tickets() {
  const { selectedSeats, totalPrice } = useSelector((state) => state.ticket);
  const dispatch = useDispatch();

  const handleDelete = (seatId) => {
    dispatch({ type: "deleteSoghe", payload: seatId });
  };

  return (
    <div className="tickets-container mt-3">
      <table className="table table-bordered table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Seat ID</th>
            <th scope="col">Price ($)</th>
            <th scope="col">Total ($)</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {selectedSeats.map((seat) => (
            <tr key={seat.soGhe}>
              <td>{seat.soGhe}</td>
              <td>${seat.gia}</td>
              <td>${totalPrice}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(seat.soGhe)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
