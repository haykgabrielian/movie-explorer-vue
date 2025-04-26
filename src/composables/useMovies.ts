import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { unref, type Ref } from 'vue';
import { fetchMovies } from '@/api/tmdb';
import type { Movies } from '@/types/movie';

export const useMovies = (
    query: Ref<string> | null,
    page: number,
    genreIds: Ref<number[]> = [],
) => {
    return useQuery<Movies>({
        queryKey: ['movies', query, page, genreIds],
        queryFn: () => fetchMovies(unref(query), page, unref(genreIds)),
        staleTime: 60000,
        keepPreviousData: true,
    } as UseQueryOptions<Movies, Error, Movies>);
}