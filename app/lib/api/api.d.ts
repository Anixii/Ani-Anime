export type PopularAndTrendingParams = {
  page?: number;
  perPage?: number;
};
export type ScheduleParams = {
  page?: number;
  perPage?: number;
  notYetAired?: boolean;
  weekStart?: number | string;
  weekEnd:
    | Saturday
    | 0
    | Sunday
    | 1
    | Monday
    | 2
    | Tuesday
    | 3
    | Wednesday
    | 4
    | Thursday
    | 5
    | Friday
    | 6;
};
export type AdvancedSearchParams = {
  query?: string;
  type?: "ANIME" | "MANGA";
  page?: number;
  perPage?: number;
  season?: "WINTER" | "SPRING" | "SUMMER" | "FALL";
  format?: "TV" | "TV_SHORT" | "OVA" | "ONA" | "MOVIE" | "SPECIAL" | "MUSIC";
  sort?: Array<SortOption>;
  genres?: Array<
    | "Action"
    | "Adventure"
    | "Cars"
    | "Comedy"
    | "Drama"
    | "Fantasy"
    | "Horror"
    | "Mahou Shoujo"
    | "Mecha"
    | "Music"
    | "Mystery"
    | "Psychological"
    | "Romance"
    | "Sci-Fi"
    | "Slice of Life"
    | "Sports"
    | "Supernatural"
    | "Thriller"
  >;
  id?: string;
  year?: string;
  status?:
    | "RELEASING"
    | "NOT_YET_RELEASED"
    | "FINISHED"
    | "CANCELLED"
    | "HIATUS";
};
export type allAnimeParams = {
  page?: number;
  limit?: number;
  q?: string;
  type?:
    | "tv"
    | "movie"
    | "ova"
    | "special"
    | "ona"
    | "music"
    | "cm"
    | "pv"
    | "tv_special";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "airing" | "complete" | "upcoming";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  genres?: string;
  sfw?: boolean;
  order_by?:
    | "mal_id"
    | "title"
    | "epiodes"
    | "score"
    | "rank"
    | "popularity"
    | "favorites"
    | "members";
};
export type TopAnimeParams = {
  page?: number;
  limit?: number;
  type?:
    | "tv"
    | "movie"
    | "ova"
    | "special"
    | "ona"
    | "music"
    | "cm"
    | "pv"
    | "tv_special";
  filter?: "airing" | "complete" | "upcoming";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw?: boolean;
  // order_by?: 'mal_id' | 'title' | 'epiodes' | 'score' | 'rank' | 'popularity' | 'favorites' | 'members'
};

export type SortOption =
  | "POPULARITY_DESC"
  | "POPULARITY"
  | "TRENDING_DESC"
  | "TRENDING"
  | "UPDATED_AT_DESC"
  | "UPDATED_AT"
  | "START_DATE_DESC"
  | "START_DATE"
  | "END_DATE_DESC"
  | "END_DATE"
  | "FAVOURITES_DESC"
  | "FAVOURITES"
  | "SCORE_DESC"
  | "SCORE"
  | "TITLE_ROMAJI_DESC"
  | "TITLE_ROMAJI"
  | "TITLE_ENGLISH_DESC"
  | "TITLE_ENGLISH"
  | "TITLE_NATIVE_DESC"
  | "TITLE_NATIVE"
  | "EPISODES_DESC"
  | "EPISODES"
  | "ID"
  | "ID_DESC";
