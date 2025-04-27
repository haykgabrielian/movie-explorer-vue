import { useQuery } from '@tanstack/vue-query';
import { fetchMovieById, fetchMovieCredits } from '@/api/tmdb';
import {MovieDetails, Credits } from '@/types/movie';

export const useMovieDetails = (movieId: number) => {
    const movieQuery = useQuery<MovieDetails, Error>({
        queryKey: ['movie', movieId],
        queryFn: () => fetchMovieById(movieId),
        staleTime: 60000,
        enabled: !!movieId
    });

    const creditsQuery = useQuery<Credits, Error>({
        queryKey: ['credits', movieId],
        queryFn: () => fetchMovieCredits(movieId),
        staleTime: 60000,
        enabled: !!movieId
    });

    return {
        movie: movieQuery.data,
        credits: creditsQuery.data,
        isLoading: movieQuery.isLoading || creditsQuery.isLoading,
        isError: movieQuery.isError || creditsQuery.isError
    };
};
