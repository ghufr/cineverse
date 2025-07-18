import type { paths } from "@/types/tmdb";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

const TMDB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;

export const tmdbClient = createFetchClient<paths>({
  baseUrl: "https://api.themoviedb.org",
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

export const $tmdb = createClient(tmdbClient);
