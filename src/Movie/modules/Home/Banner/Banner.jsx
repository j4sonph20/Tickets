import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../../../apis/movieAPI";

export default function Banner() {
  const {
    data: banner = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["banners"], queryFn: getBanners });
  return <div>
    {banner.map(banner=>{
      return <img key={banner.maBanner} width={300} src={banner.hinhAnh} alt="" />
    })}
  </div>;
}
