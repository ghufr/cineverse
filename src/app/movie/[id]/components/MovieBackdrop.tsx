import Image from "next/image";
import { useState } from "react";

export default function MovieBackdrop({
  backdropPath,
  title,
}: {
  backdropPath?: string;
  title?: string;
}) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="absolute z-0 h-96 w-full overflow-hidden">
      <Image
        src={
          !hasError && backdropPath
            ? `https://image.tmdb.org/t/p/w1280${backdropPath}`
            : "/placeholder.svg?height=400&width=1280"
        }
        alt={title || ""}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
    </div>
  );
}
