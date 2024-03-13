
import queryString from 'query-string'
import { AdvancedSearchParams, PopularAndTrendingParams, TopAnimeParams, allAnimeParams } from './api'
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
        if(!anime.ok){ 
            throw Error('error in getTranding Anime')
        }   
        return await anime.json()
    },
    async getPopularAnime(params?:PopularAndTrendingParams) { 
        const urlParams = '?' + queryString.stringify(params || {}) 
        const anime = await fetch(`https://march-api1.vercel.app/meta/anilist/popular${urlParams}`, {next:{revalidate: 82000}},) 
        if(!anime.ok){ 
            throw Error
        }   
        return await anime.json()
    },
    async getAdvancedSearchAnime(params?:AdvancedSearchParams) { 
        let queryStringParams = '';
        if (params) { 
            const { sort,genres,...restParams } = params;
            const formattedSort = sort ? `sort=${JSON.stringify(sort)}` : ''; 
            let formattedGenres
            if(genres?.length !== 0) { 
                formattedGenres = genres ? `genres=${JSON.stringify(genres)}` : '';
            } else{ 
                formattedGenres = undefined
            }
            // const formattedgenres = genres ? `genres=${JSON.stringify(genres)}` : '';
            const formattedRestParams = queryString.stringify(restParams, { arrayFormat: 'comma' });
            queryStringParams = '?' + [formattedSort,formattedGenres,formattedRestParams].filter(Boolean).join('&');
        }; 
        console.log(params);
        
        const anime = await fetch(`https://march-api1.vercel.app/meta/anilist/advanced-search${queryStringParams}`, {next:{revalidate: 82000}},) 
        if(!anime.ok){ 
            console.log("error");
            
            throw Error
        }    
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return await anime.json()
    },

}