import SearchGrid from "@/app/ui/search-bar-grid/Search";
import CatalogSidebar from "@/app/ui/sidebar-catalog/CatalogSidebar";
import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogLoading from "./lodaing";


export const metadata: Metadata = {
  title: "Catalog | Explore Anime and Manga",
  description: "Explore our extensive anime catalog on aniAnime - find your favorite anime, filter by genre, release year, popularity, and more. Discover new series, binge-watch classics, and dive into the world of Japanese animation.",
  keywords: "filter, catalog, search", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>  
    <main className=" py-36 px-4 xl:px-20 2xl:px-28">
      <h1 className="text-4xl mb-4 font-bold">Catalog</h1>
      <div className="flex justify-between gap-x-2 items-start">
        <div className="w-full md:w-[70%] xl:w-[75%]">
          <div className="mb-6"> 
          <Suspense fallback={'Load...'}> 
            <SearchGrid />
          </Suspense>
          </div>   
          <Suspense fallback={<CatalogLoading/>}> 
            {children}
          </Suspense>
        </div>
        <div className="hidden md:block md:w-[30%] xl:w-[25%]"> 
        <Suspense fallback={<h1>Load....</h1>}> 
          <CatalogSidebar />
        </Suspense>
        </div>
      </div>
    </main>
   </>
  );
}
