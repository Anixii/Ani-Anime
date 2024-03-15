import type { Metadata } from "next";
import Header from "../ui/header/Header";
export const metadata: Metadata = {
  title: "AniAnime | Explore Anime and Manga",
  description: "Explore a world of anime, manga, and more on aniAnime - your ultimate destination for all things anime-related. Watch, discover random anime, read manga, and much more.",
  keywords: "anime, manga, anime streaming, random anime, anime recommendations, manga reading, anime community", 
  authors: [ 
    {name:'Erbol Kenzhebekov', url:'https://github.com/Anixii'}, 
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>  
    <Header/> 
    <div className="mb-20">
    {children}
    </div>
   </>
  );
}
