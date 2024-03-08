
import Image from "next/image";
import { animeApi } from "../lib/api/anime";
import Header from "../ui/header/Header";
import HeroSection from "../ui/HeroSections/HeroSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardWrapper from "../ui/anime-card/CardWrapper";

export default async function Home() {
  // const data = await animeApi.getTopAnime()  
  // console.log(data);
  
  
  return (
    <> 
      <main  className="min-h-screen">
        <HeroSection/> 
        
        <div className="flex flex-col gap-y-24  px-4 xl:px-20 2xl:px-28 py-11"> 
          <article className="w-full "> 
            <div className="flex justify-between items-center mb-5 "><h3 className="text-2xl  font-bold">Top Hits Anime</h3> <Link href={'/'}><Button variant={'secondary'} className="font-medium text-[rgb(6,193,73)]">See all</Button></Link></div>
            <CardWrapper params={{perPage: 30}}/> 
          </article>
          <article className="w-full "> 
            <div className="flex justify-between items-center mb-5 "><h3 className="text-2xl  font-bold">Top Hits Anime</h3> <Link href={'/'}><Button variant={'secondary'} className="font-medium text-[rgb(6,193,73)]">See all</Button></Link></div>
            <CardWrapper params={{perPage: 30}}/> 
          </article>
          <article className="w-full "> 
            <div className="flex justify-between items-center mb-5 "><h3 className="text-2xl  font-bold">Top Hits Anime</h3> <Link href={'/'}><Button variant={'secondary'} className="font-medium text-[rgb(6,193,73)]">See all</Button></Link></div>
            <CardWrapper params={{perPage: 30}}/> 
          </article>

        </div>
      </main>
    </>
  );
}
