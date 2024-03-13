import { animeApi } from "@/app/lib/api/anime";
import { PopularAndTrending } from "@/app/lib/types/animelist";
import GridWrapper from "@/app/ui/grid-cards/GridWrapper";

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
    genres?: any;
  };
}) => {
  const { format, query, season, status, type } = searchParams || {};
  const sort = searchParams?.sort || '["POPULARITY_DESC"]';
  const genres = searchParams?.genres || "[]";
  const data: PopularAndTrending = await animeApi.getAdvancedSearchAnime({
    sort: JSON.parse(sort),
    genres: JSON.parse(genres),
    format,
    query,
    season,
    status,
    type,
    perPage: 35,
  });
  return (
    <> 

      <GridWrapper data={data.results} />
    </>
  );
};

export default CatalogPage;
