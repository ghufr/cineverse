import { apiClient } from '@/lib/tmdb/apiClient';
import { apiConfig } from '@/lib/tmdb/apiConfig';
import type { ApiResponse } from '@/types/utils';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

type PopularMoviesResponse = ApiResponse<'/3/movie/popular'>;
type MovieDetailsResponse = ApiResponse<'/3/movie/{movie_id}'>;

export const useGetPopularMovies = () => {
  const endpoint = apiConfig.movies.popular;

  return useInfiniteQuery({
    queryKey: endpoint.queryKey,
    queryFn: ({ pageParam }) =>
      apiClient<PopularMoviesResponse>(`${endpoint.path}?page=${pageParam}`),
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};

export const useGetMovieDetails = (movieId?: number) => {
  const endpoint = apiConfig.movies.detail;

  return useQuery({
    queryKey: endpoint.queryKey(movieId!),
    queryFn: () => apiClient<MovieDetailsResponse>(endpoint.path(movieId!)),
    enabled: !!movieId,
  });
};
