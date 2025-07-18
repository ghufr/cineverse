import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Movie } from "@/types/movie";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const posterUrl =
    !imageError && movie?.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://placehold.co/500x750/334155/eaeaea?text=No+Image";

  return (
    <Link href={`/movie/${movie.id}`} className="group block h-full">
      <Card className="transform cursor-pointer overflow-hidden pt-0 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative aspect-[2/3] flex-shrink-0">
          <Image
            src={posterUrl}
            alt={movie.title || ""}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
            onError={handleImageError}
            unoptimized
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-20" />
        </div>
        <CardHeader className="px-4">
          <CardTitle className="truncate text-lg">{movie.title}</CardTitle>
        </CardHeader>
        <CardFooter>
          <div className="mt-auto flex w-full items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {movie.release_date
                  ? new Date(movie.release_date).getFullYear()
                  : "-"}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-600" />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
