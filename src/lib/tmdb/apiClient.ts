import { ApiError } from './ApiError';

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const apiClient = async <T>(
  endpoint: string,
  options = {},
): Promise<T> => {
  const url = new URL(`${TMDB_API_BASE_URL}/${endpoint}`);
  url.searchParams.append('api_key', TMDB_API_KEY as string);
  url.searchParams.append('language', 'en-US');

  const res = await fetch(url, options);

  if (!res.ok) {
    const errorInfo = await res.json();
    throw new ApiError(
      'An error occurred while fetching the data.',
      res.status,
      errorInfo,
    );
  }

  return res.json();
};
