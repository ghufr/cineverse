import { TmdbResponse } from "@/lib/utils";

export type MovieCategory =
  | "popular"
  | "upcoming"
  | "now_playing"
  | "top_rated";

export type Movie = NonNullable<
  TmdbResponse<"/3/movie/popular">["results"]
>[number];

export type MovieDetail = TmdbResponse<"/3/movie/{movie_id}">;
export type MovieGenre = NonNullable<MovieDetail["genres"]>[number];

export type MovieCredits = TmdbResponse<"/3/movie/{movie_id}/credits">;
export type MovieCast = NonNullable<MovieCredits["cast"]>[number];
export type MovieCrew = MovieCredits["crew"];
