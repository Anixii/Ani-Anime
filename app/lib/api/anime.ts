
import queryString from 'query-string'
import { PopularAndTrendingParams, TopAnimeParams, allAnimeParams } from './api'
export const animeApi = {  
    async getAllAnime(params?: allAnimeParams) { 
        const urlParams = '?' + queryString.stringify(params || {}) 
        const anime = await fetch(`https://api.jikan.moe/v4/anime${urlParams}`, {cache:'force-cache',next:{revalidate: 82000}},) 
        if(!anime.ok){ 
            throw Error
        }   
        return await anime.json()
    },
    async getTopAnime(params?: TopAnimeParams) { 
        const urlParams = '?' + queryString.stringify(params || {}) 
        const anime = await fetch(`https://api.jikan.moe/v4/top/anime${urlParams}`, {cache:'force-cache',next:{revalidate: 82000}},) 
        if(!anime.ok){ 
            throw Error
        }   
        return await anime.json()
    },
    async getTrandingAnime(params?:PopularAndTrendingParams) { 
        const urlParams = '?' + queryString.stringify(params || {}) 
        const anime = await fetch(`https://march-api1.vercel.app/meta/anilist/trending${urlParams}`, {next:{revalidate: 82000}},) 
        console.log(anime);
        
        if(!anime.ok){ 
            throw Error('error in getTranding Anime')
        }   
        return await anime.json()
    },
    async getPopularAnime(params?:PopularAndTrendingParams) { 
        const urlParams = '?' + queryString.stringify(params || {}) 
        const anime = await fetch(`https://api.consumet.org/meta/anilist/popular${urlParams}`, {cache:'force-cache',next:{revalidate: 82000}},) 
        if(!anime.ok){ 
            throw Error
        }   
        return await anime.json()
    },

}