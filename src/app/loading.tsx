import { MovieCardSkeleton } from "@/app/components/MovieCardSkeleton";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <MainLayout>
      <main className="container mx-auto p-4 md:px-8 md:py-16">
        <div className="mb-8 flex w-full flex-col justify-between gap-4 md:flex-row">
          <div className="w-full md:max-w-md">
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex w-full items-center justify-center gap-2 md:justify-end">
            <Skeleton className="h-9 w-20 rounded-md" />
            <Skeleton className="h-9 w-24 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
            <Skeleton className="h-9 w-24 rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
