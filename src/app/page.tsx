"use client";

import { MainLayout } from "@/components/layouts/MainLayout";
import { useMovieListInfinite } from "@/hooks/movie";
import { useDebounce } from "@/hooks/useDebounce";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { MovieCategory } from "@/types/movie";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import PageHeader from "./components/PageHeader";
import StatusMessages from "./components/StatusMessages";
import Loading from "./loading";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<MovieCategory>("popular");

  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  const { data, isFetchingNextPage, isLoading, hasNextPage, fetchNextPage } =
    useMovieListInfinite(debouncedSearchQuery, selectedCategory);

  const movies = data?.pages.flatMap((page) => page.data?.results) || [];

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  useInfiniteScroll(handleLoadMore);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSelectedCategory("search" as MovieCategory);
    } else {
      setSelectedCategory("popular");
    }
  };

  const handleCategoryChange = (category: MovieCategory) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  if (isLoading && selectedCategory === "popular") return <Loading />; // Loading only triggered during initial load

  return (
    <MainLayout>
      <main className="container mx-auto p-4 md:px-8 md:py-16">
        <PageHeader
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
        <StatusMessages
          searchQuery={searchQuery}
          movies={movies}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
        />
        {(movies.length > 0 || isLoading) && (
          <MovieGrid movies={movies} isLoading={isLoading} />
        )}
      </main>
    </MainLayout>
  );
}
