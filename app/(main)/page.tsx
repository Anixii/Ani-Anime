import HeroSection from "../ui/HeroSections/HeroSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardWrapper from "../ui/anime-card/CardWrapper";
import { Suspense } from "react";
import { CardListSkeleton,  } from "../ui/sekeletons/Sekelonts";

export default async function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <div className="flex flex-col gap-y-24  px-4 xl:px-20 2xl:px-28 py-11"> 
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Top Hit Anime</h3>{" "}
              <Link href={`/catalog?sort=["TRENDING_DESC"]`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/> }> 
              <CardWrapper params={{ sort: ["TRENDING_DESC"], perPage: 30 }} />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Most Popular Anime</h3>{" "}
              <Link href={`/catalog?sort=["POPULARITY_DESC"]`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper
                params={{ sort: ["POPULARITY_DESC"], perPage: 30 }}
              />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Most Scored Anime</h3>{" "}
              <Link href={`/catalog?sort=["SCORE_DESC"]`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper params={{ sort: ["SCORE_DESC"], perPage: 30 }} />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Most Liked Anime</h3>{" "}
              <Link href={`/catalog?sort=["FAVOURITES_DESC"]`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper
                params={{ sort: ["FAVOURITES_DESC"], perPage: 30 }}
              />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Coming Soon Anime...</h3>{" "}
              <Link href={`/catalog?sort=["POPULARITY_DESC"]&status=NOT_YET_RELEASED`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper 
                reales={true}
                params={{
                  sort: ["POPULARITY_DESC"],
                  status: "NOT_YET_RELEASED",
                  perPage: 30,
                }}
              />
            </Suspense>
          </article>
          
          <h2 className="text-center font-bold text-3xl">MANGA:</h2>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Top Hit Manga</h3>{" "}
              <Link href={`/catalog?sort=["TRENDING_DESC"]&type=MANGA`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper
                params={{ sort: ["TRENDING_DESC"], type: "MANGA", perPage: 30 }}
              />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Most Popular Manga</h3>{" "}
              <Link href={`/catalog?sort=["POPULARITY_DESC"]&type=MANGA`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper
                params={{
                  sort: ["POPULARITY_DESC"],
                  perPage: 30,
                  type: "MANGA",
                }}
              />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Most Scored Manga</h3>{" "}
              <Link href={`/catalog?sort=["SCORE_DESC"]&type=MANGA`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper
                params={{ sort: ["SCORE_DESC"], perPage: 30, type: "MANGA" }}
              />
            </Suspense>
          </article>
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Most Liked Manga</h3>{" "}
              <Link href={`/catalog?sort=["FAVOURITES_DESC"]&type=MANGA`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper
                params={{
                  sort: ["FAVOURITES_DESC"],
                  perPage: 30,
                  type: "MANGA",
                }}
              />
            </Suspense>
          </article> 
          
          <article className="w-full ">
            <div className="flex justify-between items-center mb-5 ">
              <h3 className="text-2xl  font-bold">Coming Soon Manga...</h3>{" "}
              <Link href={`/catalog?sort=["POPULARITY_DESC"]&type=MANGA&status=NOT_YET_RELEASED`}>
                <Button
                  variant={"secondary"}
                  className="font-medium text-[rgb(6,193,73)]"
                >
                  See all
                </Button>
              </Link>
            </div>
            <Suspense fallback={<CardListSkeleton/>}>
              <CardWrapper 
              reales={true}
                params={{
                  sort: ["POPULARITY_DESC"], 
                  type:'MANGA',
                  status: "NOT_YET_RELEASED",
                  perPage: 30,
                }}
              />
            </Suspense>
          
          </article>
        </div>
      </main>
    </>
  );
}
