export type PopularAndTrendingParams = {
        page?:number 
        perPage?: number
    }
export type ScheduleParams = {
        page?:number 
        perPage?: number,
        notYetAired?:boolean,
        weekStart?: number | string,
        weekEnd: Saturday | 0  | Sunday | 1 | Monday | 2 | Tuesday | 3 | Wednesday | 4 | Thursday |  5 | Friday | 6
    }


// export type allAnimeParams = { 
//     page?: number, 
//     limit?: number, 
//     q?:string, 
//     type?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | 'cm' | 'pv'| 'tv_special'
//     score?: number, 
//     min_score?: number 
//     max_score?: number 
//     status?: 'airing' | 'complete' | 'upcoming' 
//     rating?: 'g'| 'pg' |'pg13' | 'r17' | 'r' | 'rx'
//     genres?: string,
//     sfw?: boolean,
//     order_by?: 'mal_id' | 'title' | 'epiodes' | 'score' | 'rank' | 'popularity' | 'favorites' | 'members'
// }
// export type TopAnimeParams = { 
//     page?: number, 
//     limit?: number, 
//     type?: 'tv' | 'movie' | 'ova' | 'special' | 'ona' | 'music' | 'cm' | 'pv'| 'tv_special'
//     filter?: 'airing' | 'complete' | 'upcoming' 
//     rating?: 'g'| 'pg' |'pg13' | 'r17' | 'r' | 'rx'
//     sfw?: boolean
//     order_by?: 'mal_id' | 'title' | 'epiodes' | 'score' | 'rank' | 'popularity' | 'favorites' | 'members'
// }