
import Image from "next/image";
import { animeApi } from "../lib/api/anime";
import Header from "../ui/header/Header";
import HeroSection from "../ui/HeroSections/HeroSection";

export default async function Home() {
  // const data = await animeApi.getTopAnime()  
  // console.log(data);
  
  
  return (
    <> 
      <main  className="min-h-screen">
        <HeroSection/>
      </main>
    </>
  );
}
