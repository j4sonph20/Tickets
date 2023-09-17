import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";

export default function SeatList({ seats }) {
  const { selectedSeats } = useSelector((state) => state.ticket);

  // Helper function to render a row of seats
  const renderSeatRow = (seatRow) => (
    <tr key={seatRow.id} className="text-danger fs-4">
      <td>{seatRow.hang}</td>
      {seatRow.danhSachGhe.map((seat) => {
        const isSelected = selectedSeats.find(
          (item) => item.soGhe === seat.soGhe
        );
        return (
          <SeatItem seat={seat} isSelected={!!isSelected} key={seat.soGhe} />
        );
      })}
    </tr>
  );

  return (
    <table>
      <tbody>
        {seats.map((seatRow) => {
          if (seatRow.hang === "") {
            return (
              <tr
                className="text-danger fs-3"
                style={{ alignItems: "center" }}
                key={seatRow.id}
              >
                <td>
                  <span></span>
                </td>
                {seatRow.danhSachGhe.map((seat) => (
                  <td key={seat.soGhe}>
                    <span
                      className="d-inline-block"
                      style={{ width: "50px", textAlign: "center" }}
                    >
                      {seat.soGhe}
                    </span>
                  </td>
                ))}
              </tr>
            );
          }
          return renderSeatRow(seatRow);
        })}
      </tbody>
    </table>
  );
}
