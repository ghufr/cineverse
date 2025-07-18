"use client";

import { MainLayout } from "@/components/layouts/MainLayout";
import { useMovieDetail } from "@/hooks/movie";
import { MovieDetail } from "@/types/movie";
import { notFound, useParams } from "next/navigation";
import MovieContent from "./components/MovieContent";
import Loading from "./loading";

export default function MovieDetailPage() {
  const params = useParams();
  const movieId = Number.parseInt(params.id as string);

  const { isLoading, movie, credits, error } = useMovieDetail(movieId);

  if (isLoading) return <Loading />;
  if (error && !movie) {
    notFound();
  }

  return (
    <MainLayout>
      <MovieContent movie={movie as MovieDetail} credits={credits} />
    </MainLayout>
  );
}
