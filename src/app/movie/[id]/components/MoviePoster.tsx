import { BLUR_DATA_URL } from "@/constants/movie";
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
    <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-muted">
      <Image
        src={
          !hasError && posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : BLUR_DATA_URL
        }
        alt={title || ""}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px"
        onError={() => setHasError(true)}
        placeholder={hasError ? "empty" : "blur"}
        blurDataURL={BLUR_DATA_URL}
      />
    </div>
  );
}
