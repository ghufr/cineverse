import { Skeleton } from "@/components/ui/skeleton";

export function MovieCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-card">
      <Skeleton className="relative aspect-[2/3] w-full rounded-b-none" />
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="mb-4 flex-1">
          <Skeleton className="h-5 w-full" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
