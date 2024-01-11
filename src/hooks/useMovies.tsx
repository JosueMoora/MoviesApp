import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movie';

interface Movies {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}
export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<Movies>(
        {
            nowPlaying: [],
            popular: [],
            topRated: [],
            upcoming: [],
        }
    );
    const getMovies = async () => {
        const res = await Promise.all([
        movieDB.get<MovieDBResponse>('/now_playing'),
        movieDB.get<MovieDBResponse>('/popular'),
        movieDB.get<MovieDBResponse>('/top_rated'),
        movieDB.get<MovieDBResponse>('/upcoming'),

        ])
        setMovies({
            nowPlaying: res[0].data.results,
            popular: res[1].data.results,
            topRated: res[2].data.results,
            upcoming: res[3].data.results,
        })
        setIsLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...movies,
        isLoading,
    };
};
