import { animeApi } from "@/app/lib/api/anime";
import { PopularAndTrendingParams } from "@/app/lib/api/api";
import { PopularAndTrending } from "@/app/lib/types/animelist";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type CardWrapperType = {
  params?: PopularAndTrendingParams;
};
const CardWrapper: React.FC<CardWrapperType> = async ({ params }) => {
  const data: PopularAndTrending = await animeApi.getTrandingAnime(params);
  console.log(data.results[0].title);

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="rounded-xl">
          {data.results.map((item, index) => (
            <CarouselItem className="basis-[13%]" key={index}>
              <Link  className="relative rounded-xl overflow-hidden" href={"/"}>
                <Image
                  className="rounded-xl w-full h-full brightness-75 "
                  src={item.image}
                  quality={100}
                  width={205}
                  height={298}
                  alt="Banner of Anime"
                />  
                <div className="absolute bottom-0 p-2 rounded-xl  to-transparent from-black bg-gradient-to-t text-white">
                  <span className="text-[14px] font-semibold line-clamp-1">{item.title.english}</span>
                  <span className="text-[14px] font-normal line-clamp-1">{item.description}</span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CardWrapper;
