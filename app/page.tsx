
import Image from "next/image";
import { animeApi } from "./lib/api/anime";
import Header from "./ui/header/Header";

export default async function Home() {
  const data = await animeApi.getTrandingAnime()  
  console.log(data);
  
  
  return (
    <> 
      <Header/>
      <main>

      </main>
    </>
  );
}
