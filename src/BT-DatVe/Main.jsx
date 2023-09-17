import React from "react";
import data from "./danhSachGhe.json";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import { useSelector } from "react-redux";

export default function Main() {
  const { totalPrice } = useSelector((state) => state.ticket);

  const handleBook = () => {
    alert(`Total Price: ${totalPrice} VND`);
  };

  return (
    <div
      style={{
        backgroundImage: "url(./img/jhin.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        className="text-center text-white py-3"
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      >
        MOVIE SEATS
      </h1>
      <div
        className="container"
        style={{
          maxWidth: "800px",
          width: "90%",
          background: "rgba(128, 128, 128, 0.7)",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h5 className="text-warning mb-3">
          Fill in the Required Details Below and Select Your Seats
        </h5>
        <ul className="d-flex mb-3">
          <li className="legend-item me-3">
            <img
              style={{
                height: "15px",
                width: "15px",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zIYlwKXtRLMAtDXTzcIbgEoN2SCXZH_kT_1KLuqBm3QdBw_9ZmmbVcuam6bsIOs_tes&usqp=CAU"
              alt=""
            />
            Selected
          </li>
          <li className="legend-item me-3">
            <img
              style={{
                height: "15px",
                width: "15px",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
              src="https://e7.pngegg.com/pngimages/329/173/png-clipart-red-computer-icons-square-s-angle-color-thumbnail.png"
              alt=""
            />
            Already Booked
          </li>
          <li className="legend-item">
            <img
              style={{
                height: "15px",
                width: "15px",
                marginRight: "5px",
                verticalAlign: "middle",
              }}
              src="https://printgo.vn/uploads/media/792227/cac-loai-mau-xanh-2_1624333127.jpg"
              alt=""
            />
            Empty
          </li>
        </ul>

        <div>
          <SeatList seats={data} />
        </div>
        <button
          className="btn btn-dark mt-3"
          onClick={handleBook}
          style={{ width: "100%" }}
        >
          Book Tickets
        </button>

        <div className="mt-3">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
