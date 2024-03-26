import { HomeIcon,LibraryBigIcon } from "lucide-react";
export const headerNav = [
    {
      display: "Home",
      path: "/", 
      icon: HomeIcon
    },
    {
      display: "Catalog",
      path: "/catalog",
      icon: LibraryBigIcon,
    }, 
  ]; 

export const CatalogGenreSelect =  [
    { value: 'Action', label: 'Action' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Cars', label: 'Cars' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Mahou Shoujo', label: 'Mahou Shoujo' },
    { value: 'Mecha', label: 'Mecha' },
    { value: 'Music', label: 'Music' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'Psychological', label: 'Psychological' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
    { value: 'Slice of Life', label: 'Slice of Life' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Supernatural', label: 'Supernatural' },
    { value: 'Thriller', label: 'Thriller' },
  ] 
export const CatalogFormats = [ 
  {name:'TV', value: 'TV'},
  {name:'TV Short', value: 'TV_SHORT'},
  {name:'OVA', value: 'OVA'},
  {name:'ONA', value: 'ONA'},
  {name:'Special', value: 'SPECIAL'},
  {name:'Movie', value: 'MOVIE'},
  {name:'Music', value: 'MUSIC'},
] 
export const CatalogSeasons = [ 
  {name:'Summer', value: 'SUMMER'},
  {name:'Fall', value: 'FALL'},
  {name:'Winter', value: 'WINTER'},
  // {name:'Spring', value: 'SPRING'},
]
export const CatalogStatus = [ 
  {name:'Relesing', value: 'RELEASING'},
  {name:'Not Yet Released', value: 'NOT_YET_RELEASED'},
  {name:'Finished', value: 'FINISHED'},
  {name:'Cancelled', value: 'CANCELLED'},
]
export const CatalogType = [ 
  {name:'Anime', value: 'ANIME'},
  {name:'Manga', value: 'MANGA'},

]