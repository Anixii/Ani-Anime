
import { CarouselItem } from "@/components/ui/carousel";
import { Link } from "lucide-react";
import React from "react";
import { PopularAndTrendingResult } from "../../lib/types/animelist";
import Image from "next/image";
type AnimeCardProps = {
  item: PopularAndTrendingResult;
};
const AnimeCard: React.FC<AnimeCardProps> = ({ item }) => { 
    
  return (
    <> 
    <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-[25%] lg:basis-[20%] xl:basis-1/6 min-[1680px]:basis-[13%]">
      <Link className="relative rounded-xl overflow-hidden " href={"/"}>
        <Image
          className="rounded-xl  w-full h-full brightness-75 "
          src={item.image}
          quality={100}
          width={205}
          height={298}
          alt="Banner of Anime"
          />
        <div
          className={`m-3 py-1 px-3 text-[14px] font-bold bg-[rgb(6,193,73)] rounded-sm absolute top-0`}
        >
          {item.rating / 10 || 0}
        </div>
        <div className="absolute bottom-0 p-2 rounded-xl to-transparent from-black bg-gradient-to-t  text-white">
          <h5 className="text-[15px] font-semibold line-clamp-1">
            {item.title.userPreferred}
          </h5>
          <h5 className="text-[15px] font-normal line-clamp-1">
            {item.description}
          </h5>
        </div>
      </Link>
    </CarouselItem>
    </>
  );
};

export default AnimeCard;
