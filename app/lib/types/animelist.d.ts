
export type PopularAndTrending = {
    currentPage: 1, 
    hasNextPage: boolean
    results: Array<PopularAndTrendingResult>
    } 

export type PopularAndTrendingResult = {
        id: string,
        malId:number
        title: {
            romaji: string,
            english: string,
            native: string,
            userPreferred: string
        },
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
 
export type Anime= {
    id: string,
    malId:number
    title: {
        romaji: string,
        english: string,
        native: string,
        userPreferred: string
    },
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

    trailer:{
        id: string,
    }

    genres:Array<string>, 
    isLicensed: boolean, 
    isAdult: boolean
    countryOfOrigin: string, 
    popularity: number, 
    currentEpisodes: number,
    studios: Array<string>, 
    subOrDub:string 

    characters:Array<CharactersType>
    relations: Array<RelationsType>
    recommendations:Array<RecommendationsType>

    synomus:Array<string>, 
    startDate: { 
        year:number, 
        month: number, 
        day:number
    }, 
    endDate:{ 
        year:number, 
        month: number, 
        day:number
    }
} 
export type RecommendationsType = { 
    id: number,
    malId: number ,
    title: {
        romaji: string,
        english: string,
        native: string,
        userPreferred: string
    }, 
    status: string, 
    episodes: number, 
    image: string,
    cover:string, 
    rating: number, 
    type: string
}
export type EpisodesType = { 
    id:string, 
    title: any, 
    image:string, 
    number:string, 
    createdAt:any 
    description:string, 
    url:string
}
export type RelationsType = { 
    id:number, 
    relationType:string,
    malId: number, 
    title: {
        romaji: string,
        english: string,
        native: string,
        userPreferred: string
    }, 
    status: string, 
    episodes: number, 
    image: string, 
    color: string, 
    type: string, 
    cover:string, 
    rating:number

}
export type CharactersType = { 
    id:number, 
    role: string, 
    name:{ 
        first:string, 
        last:string, 
        full:string, 
        native: string, 
        userPreferred: string,
    }
    image:string, 
    voiceActors:Array<VoiceActor>
}
export type VoiceActor = { 
    id: number, 
    language: string, 
    name:{ 
        first:string, 
        last:string, 
        full:string, 
        native: string, 
        userPreferred: string,
    }, 
    image: string
}