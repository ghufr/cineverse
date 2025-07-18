import { Badge } from "@/components/ui/badge";
import { formatRuntime } from "@/lib/utils";
import { MovieDetail, MovieGenre } from "@/types/movie";
import { Calendar, Clock, Star } from "lucide-react";

export function MovieHeader({ movie }: { movie: MovieDetail }) {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-foreground">{movie.title}</h1>
      <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : "-"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500" />
          <span>{movie.vote_average.toFixed(1)}/10</span>
        </div>
        {movie.runtime && (
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{formatRuntime(movie.runtime)}</span>
          </div>
        )}
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {movie.genres?.map((genre: MovieGenre) => (
          <Badge key={genre.id} variant="secondary">
            {genre.name}
          </Badge>
        ))}
      </div>
    </>
  );
}
