import { $tmdb, tmdbClient } from "@/lib/tmdb";
import type { MovieCategory } from "@/types/movie";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovieListInfinite = (
  searchQuery: string,
  category: MovieCategory,
) => {
  return useInfiniteQuery({
    queryKey: ["movies", searchQuery, category],
    queryFn: ({ pageParam = 1 }) => {
      if (searchQuery.trim()) {
        return tmdbClient.GET("/3/search/movie", {
          params: { query: { query: searchQuery, page: pageParam } },
        });
      }
      return tmdbClient.GET(`/3/movie/${category}`, {
        params: {
          query: {
            page: pageParam,
          },
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data?.page ?? 0;
      const totalPages = lastPage.data?.total_pages ?? 0;
      return totalPages > 0 && currentPage < totalPages
        ? currentPage + 1
        : undefined;
    },
  });
};

export const useMovieDetail = (movieId: number) => {
  const {
    data: movie,
    isLoading: isLoadingMovie,
    error: errorMovie,
  } = $tmdb.useQuery("get", "/3/movie/{movie_id}", {
    params: { path: { movie_id: movieId } },
    enabled: !!movieId,
  });

  const {
    data: credits,
    isLoading: isLoadingCredits,
    error: errorCredits,
  } = $tmdb.useQuery("get", "/3/movie/{movie_id}/credits", {
    params: { path: { movie_id: movieId } },
    enabled: !!movieId,
  });

  return {
    movie,
    credits,
    isLoading: isLoadingMovie || isLoadingCredits,
    error: errorMovie || errorCredits,
  };
};
