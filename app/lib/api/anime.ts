
import queryString from 'query-string'
import { TopAnimeParams, allAnimeParams } from './api'
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
    }
}