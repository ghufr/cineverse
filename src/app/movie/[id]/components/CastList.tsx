import { BLUR_DATA_URL } from "@/constants/movie";
import { MovieCast } from "@/types/movie";
import Image from "next/image";
import { useState } from "react";

export default function CastList({ cast }: { cast: MovieCast[] }) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">Main Cast</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {cast.map((actor) => {
          const hasError = !actor.profile_path || imageErrors[actor.id];
          const imageUrl = hasError
            ? BLUR_DATA_URL
            : `https://image.tmdb.org/t/p/w185${actor.profile_path}`;
          return (
            <div key={actor.id} className="text-center">
              <div className="relative mb-2 aspect-[2/3] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={imageUrl}
                  alt={actor.name || ""}
                  fill
                  className="object-cover"
                  sizes="185px"
                  onError={() => handleImageError(actor.id)}
                  placeholder={hasError ? "empty" : "blur"}
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <p className="text-sm font-medium">{actor.name}</p>
              <p className="text-xs text-muted-foreground">{actor.character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
