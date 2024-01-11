import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB'
import { MovieFull } from '../interfaces/movie'
import { Cast, CreditsResponse } from '../interfaces/credits'

interface MovieDetails {
    isLoading: boolean
    movieFull?: MovieFull
    cast: Cast[]
}
export const useMovie = (id: number) => {
 const [movie, setMovie] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
 })

 const getMovie = async() => {
    const [movieRes, castRes] = await Promise.all([
        movieDB.get<MovieFull>(`/${id}`),
        movieDB.get<CreditsResponse>(`/${id}/credits`),
    ])
    setMovie({
        isLoading: false,
        movieFull: movieRes.data,
        cast: castRes.data.cast,
    })
 }

 useEffect(()=>{
    getMovie()
 },[])

 return {
    ...movie,
 }
}
