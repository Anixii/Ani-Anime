import { animeApi } from "@/app/lib/api/anime";
import { AdvancedSearchParams } from "@/app/lib/api/api";
import {
  PopularAndTrending,
  PopularAndTrendingResult,
} from "@/app/lib/types/animelist";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type CardWrapperType = {
  params?: AdvancedSearchParams;
  reales?: boolean;
};
const CardWrapper: React.FC<CardWrapperType> = async ({
  params,
  reales = false,
}) => {
  const data: PopularAndTrending = await animeApi.getAdvancedSearchAnime(
    params
  );
  return (
    <>
      <Carousel
        opts={{
          dragFree: true,
          // loop:true,
        }}
        className="w-full "
      >
        <CarouselContent className="rounded-xl">
          {data.results.map((item, index) =>
            reales ? (
              <AnimeCardNotRealesed key={index} item={item} />
            ) : (
              <AnimeCard key={index} item={item} />
            )
          )}
        </CarouselContent>
      </Carousel>
    </>
  );
};

type AnimeCardProps = {
  item: PopularAndTrendingResult;
};
const AnimeCard: React.FC<AnimeCardProps> = ({ item }) => {
  return (
    <>
      <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-[25%] lg:basis-[20%] xl:basis-1/6 min-[1680px]:basis-[13%]">
        <Link className="relative rounded-xl overflow-hidden " href={`/watch/${item.id}`}>
          <Image
            className="rounded-xl  w-full h-full brightness-75 "
            src={item.image}
            quality={100}
            width={205}
            height={298}
            alt="Banner of Anime"
          />
          <div
            className={`m-3 py-1 px-3 text-[14px] font-bold bg-[rgb(6,193,73)] text-white rounded-sm absolute top-0`}
          >
            {item.rating / 10 || 0}
          </div>
          <div className="absolute bottom-0 p-2 rounded-xl to-transparent from-black bg-gradient-to-t  text-white">
            <div className="text-[14px] font-semibold line-clamp-1">
              {item.title.userPreferred}
            </div>
            <div className="text-[14px] font-normal line-clamp-1">
              {item.description}
            </div>
          </div>
        </Link>
      </CarouselItem>
    </>
  );
};
const AnimeCardNotRealesed: React.FC<AnimeCardProps> = ({ item }) => {
  return (
    <>
      <CarouselItem className="basis-[75%] overflow-hidden rounded-xl h-[200px] ">
        <Link
          className="relative rounded-xl h-full overflow-hidden "
          href={"/"}
        >
          <div className="h-full overflow-hidden  rounded-xl brightness-95 ">
            <div
              className={`w-[100%] rounded-xl image__bg brightness-75 ${
                item.cover || "blur-sm"
              }`}
              style={{ backgroundImage: `url(${item.cover || item.image})` }}
            ></div>
            <div className="absolute top-2 w-full p-3 sm:p-6 flex gap-y-3 h-full justify-center flex-col  font-bold to-transparent">
              <h4 className={`line-clamp-1  saturate-50 text-white text-2xl ${!item.cover && 'w-[80%]' }`}>
                {item.title.userPreferred}
              </h4>
              <div
                className="block py-1 px-4 rounded-md text-white w-fit"
                style={{ backgroundColor: "rgb(6,193,73)" }}
              >
                {item.type || "Unknown"}
              </div>
            </div>
            {!item.cover && (
              <Image
                className="absolute hidden sm:block rounded-e-xl right-0 h-full w-auto top-0"
                src={item.image}
                quality={100}
                width={107}
                height={300}
                alt="Banner of Anime"
              />
            )}
          </div>
        </Link>
      </CarouselItem>
    </>
  );
};
export default CardWrapper;
