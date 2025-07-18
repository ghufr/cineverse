import { Button } from "@/components/ui/button";
import { MovieCredits, MovieDetail } from "@/types/movie";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import CastList from "./CastList";
import MovieBackdrop from "./MovieBackdrop";
import { MovieHeader } from "./MovieHeader";
import { MoviePoster } from "./MoviePoster";

export default function MovieContent({
  movie,
  credits,
}: {
  movie: MovieDetail;
  credits?: MovieCredits;
}) {
  const router = useRouter();
  const director = credits?.crew?.find((person) => person.job === "Director");
  const cast = credits?.cast?.slice(0, 8) || [];

  return (
    <>
      <MovieBackdrop backdropPath={movie.backdrop_path} title={movie.title} />
      <main className="relative z-10 container mx-auto p-4 md:px-8 md:py-16">
        <div className="min-h-screen">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <MoviePoster posterPath={movie.poster_path} title={movie.title} />
            </div>

            <div className="rounded-lg bg-background/70 p-4 backdrop-blur-md lg:col-span-2">
              <MovieHeader movie={movie} />

              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-semibold">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  {movie.overview}
                </p>
              </div>

              {director && (
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold">Director</h3>
                  <p className="text-muted-foreground">{director.name}</p>
                </div>
              )}

              {cast.length > 0 && <CastList cast={cast} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
