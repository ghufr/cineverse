export const apiConfig = {
  movies: {
    popular: {
      queryKey: ['movies', 'popular'],
      path: '/movie/popular',
    },
    detail: {
      queryKey: (movieId: number) => ['movies', 'detail', movieId] as const,
      path: (movieId: number) => `/movie/${movieId}`,
    },
    credits: {
      queryKey: (movieId: number) => ['movies', 'credits', movieId] as const,
      path: (movieId: number) => `/movie/${movieId}/credits`,
    },
  },
};
