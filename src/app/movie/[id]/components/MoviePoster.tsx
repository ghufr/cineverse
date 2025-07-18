import Image from "next/image";
import { useState } from "react";

export function MoviePoster({
  posterPath,
  title,
}: {
  posterPath?: string;
  title?: string;
}) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
      <Image
        src={
          !hasError && posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : "https://placehold.co/500x750/1e293b/ffffff?text=No+Image"
        }
        alt={title || ""}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
