import { animeApi } from "@/app/lib/api/anime";
import { PopularAndTrending } from "@/app/lib/types/animelist";
import GridWrapper from "@/app/ui/grid-cards/GridWrapper";
import SearchGrid from "@/app/ui/search-bar-grid/Search";
import CatalogSidebar from "@/app/ui/sidebar-catalog/CatalogSidebar";
import React from "react";

const CatalogPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: any;
    status?:
      | "RELEASING"
      | "NOT_YET_RELEASED"
      | "FINISHED"
      | "CANCELLED"
      | "HIATUS";
    format?: "TV" | "TV_SHORT" | "OVA" | "ONA" | "MOVIE" | "SPECIAL" | "MUSIC";
    season?: "WINTER" | "SPRING" | "SUMMER" | "FALL";
    type?: "ANIME" | "MANGA";
    genres?: any
  };
}) => {
  const { format, query, season, status, type, } = searchParams || {};
  const sort = searchParams?.sort || '["POPULARITY_DESC"]';
  const genres = searchParams?.genres || '[]';
  const data: PopularAndTrending = await animeApi.getAdvancedSearchAnime({
    sort: JSON.parse(sort),
    genres: JSON.parse(genres),
    format,
    query,
    season,
    status,
    type,
  });
  return (
    <main className="py-36 px-4 xl:px-20 2xl:px-28">
      <h1 className="text-4xl mb-4 font-bold">Catalog</h1>
      <div className="flex justify-between gap-x-2 items-start">
        <div className="w-full md:w-[70%] xl:w-[75%]">
          <div className="mb-6">
            <SearchGrid />
          </div>
          <GridWrapper data={data.results} />
        </div>
        <div className="hidden md:block md:w-[30%] xl:w-[25%]">
          <CatalogSidebar />
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
