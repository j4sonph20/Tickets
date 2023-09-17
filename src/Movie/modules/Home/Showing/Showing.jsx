import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../apis/movieAPI";
export default function Showing() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return (
    <div>
      <ul>
        {data.map((movie) => {
          return <li key={movie.maPhim}>
            <span>{movie.tenPhim}</span></li>;
            <button></button>
        })}
      </ul>
    </div>
  );
}
