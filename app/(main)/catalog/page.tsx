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
    page?: string;
  };
}) => {
  const data: PopularAndTrending = await animeApi.getAdvancedSearchAnime();
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
          <CatalogSidebar/>
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;
