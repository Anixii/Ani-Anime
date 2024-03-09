
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