import { MovieCategory } from "@/types/movie";

export const movieCategories: { key: MovieCategory; label: string }[] = [
  { key: "popular", label: "Popular" },
  { key: "now_playing", label: "Now Playing" },
  { key: "top_rated", label: "Top Rated" },
  { key: "upcoming", label: "Upcoming" },
];

export const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
