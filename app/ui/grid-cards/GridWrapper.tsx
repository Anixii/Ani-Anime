import { PopularAndTrendingResult } from "@/app/lib/types/animelist";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GridCard from "./GridCard";
type GridWrapperPropsType = {
  data: Array<PopularAndTrendingResult>;
};
const GridWrapper: React.FC<GridWrapperPropsType> = ({ data }) => {
  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
        {data.map((item, index) => (
          <GridCard anime={item} key={index} />
        ))}
      </section>
    </>
  );
};

export default GridWrapper;
