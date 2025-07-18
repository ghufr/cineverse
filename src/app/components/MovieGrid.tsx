import { Movie } from "@/types/movie";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

export default function MovieGrid({
  movies,
  isLoading,
}: {
  movies: (Movie | undefined)[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index}>
            <MovieCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => {
        if (!movie || !movie.poster_path) return null;
        return (
          <MovieCard
            key={`${movie?.id}-${movie?.title}-${movie?.release_date}`}
            movie={movie}
          />
        );
      })}
    </div>
  );
}
