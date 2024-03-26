import { PopularAndTrendingResult } from "@/app/lib/types/animelist";
import Image from "next/image";
import React from "react";
type GridWrapperPropsType = {
  anime: PopularAndTrendingResult;
};
const GridCard: React.FC<GridWrapperPropsType> = ({ anime }) => {
  return (
    <div className="relative rounded-xl overflow-hidden " >
      <Image
        className="rounded-xl  w-full h-full brightness-90 "
        src={anime.image}
        quality={100}
        width={205}
        height={298}
        alt="Banner of Anime"
      />
      <div
        className={`m-3 py-1 px-3 text-[14px] font-bold bg-[rgb(6,193,73)] text-white rounded-sm absolute top-0`}
      >
        {anime.rating / 10 || 0}
      </div>
      <div className="absolute bottom-0 p-2 rounded-xl to-transparent from-black bg-gradient-to-t  text-white">
        <h4 className="text-[15px] font-semibold line-clamp-1">
          {anime.title.userPreferred}
        </h4>
        <h5 className="text-[15px] font-normal line-clamp-1">
          {anime.description}
        </h5>
      </div>
    </div>
  );
};

export default GridCard;
