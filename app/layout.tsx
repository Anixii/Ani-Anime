import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ui/theme-provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <link rel="icon" href="https://vectorseek.com/wp-content/uploads/2023/07/Mugiwara-Logo-Vector.jpg" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
