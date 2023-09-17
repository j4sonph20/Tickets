import { useDispatch,useSelector } from "react-redux";
import React, { useState } from "react";

export default function ({ seat,isSelected }) {
  const dispatch = useDispatch();


  let classes = "btn m-1 p-2";
  if (seat.daDat) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " btn-primary";
  }

  const handleSelect = () => {


    dispatch({
      type: "selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };

  return (
    <td>
      <button
        className={classes}
        disabled={seat.daDat}
        onClick={handleSelect}
        style={{ width: "50px", textAlign: "center" }}
      >
        {seat.soGhe}
      </button>
    </td>
  );
}
