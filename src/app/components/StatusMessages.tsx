import { Movie } from "@/types/movie";

export default function StatusMessages({
  searchQuery,
  movies,
  isLoading,
  hasNextPage,
}: {
  searchQuery: string;
  movies: (Movie | undefined)[];
  isLoading: boolean;
  hasNextPage: boolean | undefined;
}) {
  return (
    <>
      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">
            Search results for &quot;{searchQuery}&quot;
          </h2>
        </div>
      )}
      {movies.length === 0 && !isLoading && (
        <div className="py-12 text-center">
          <p className="text-xl text-gray-400">
            {searchQuery
              ? "No movies found for your search."
              : "No movies available."}
          </p>
        </div>
      )}
      {!hasNextPage && movies.length > 0 && !isLoading && (
        <div className="py-8 text-center">
          <p className="text-muted">No more movies to load.</p>
        </div>
      )}
    </>
  );
}
