
export type PopularAndTrending = {
    currentPage: 1, 
    hasNextPage: boolean
    results: Array<PopularAndTrendingResult>
    }
type PopularAndTrendingResult = {
        id: string,
        malId:number
        title: string//obj,
        image: string, 
        type: string,
        rating: number,
        releaseDate: string
        
        description: string 
        status: string 
        cover: string
        color: string 
        totalEpisodes: number 
        duration: number

        genres:Array<string>
        trailer:{
            english: string,
            native: string
        }
}



type Response<T> = { 
    data: Array<T>, 
    pagination: ResponsePagiantion
} 
type ResponsePagiantion = { 
    last_visible_page: number, 
    has_next_page: boolean, 
    items: { 
        count: number, 
        total: number, 
        per_page: number
    }
}   
export type ResponseMainPage = Response<AnimeResponseData>






type AnimeResponseData = {
    mal_id: number, 
    url: string 
    images: AnimeResponseDataImages
    trailer: AnimeResponseDataTrailer,  
    approved: boolean, 
    title: string, 
    type: string, 
    source: string, 
    epiodes: number, 
    status: string, 
    airing: boolean, 
    duration: string, 
    rating: string, 
    score: number, 
    scored_by: number, 
    rank: number, 
    popularity: number, 
    members: number, 
    favorites: number,
    synopsis: string, 
    background: string, 
    season: string, 
    year: number
    broadcast: AnimeResponseDataBroadCast,
    producers: Array<AnimeResponseDataArrays>
    licensors: Array<AnimeResponseDataArrays>
    studios: Array<AnimeResponseDataArrays>
    genres: Array<AnimeResponseDataArrays>
    explicit_genres: Array<AnimeResponseDataArrays>
    themes: Array<AnimeResponseDataArrays>
    demographics: Array<AnimeResponseDataArrays>
        
} 
type AnimeResponseDataBroadCast = { 
    day: string,
    time: string,
    timezone: string,
    string: string
} 
type AnimeResponseDataArrays = { 
    mal_id: number, 
    type: string, 
    name: string
    url: string
}
type AnimeResponseDataImages = { 
    jpg:{ 
        image_url: string, 
        small_image_url: string, 
        large_image_url: string
    }, 
    webp: { 
        image_url: string, 
        small_image_url: string, 
        large_image_url: string
    }
}
type AnimeResponseDataTrailer = { 
        youtube_id: string, 
        url: string, 
        embed_url: string
}