import { MainLayout } from "@/components/layouts/MainLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <MainLayout>
      <div className="absolute z-0 h-96 w-full overflow-hidden">
        <Skeleton className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      <main className="relative z-10 container mx-auto p-4 md:px-8 md:py-16">
        <div className="min-h-screen text-white">
          <div>
            <div className="mb-6 inline-flex h-10 items-center justify-center rounded-md px-4 py-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Go Back</span>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <Skeleton className="relative aspect-[2/3] w-full rounded-lg" />
              </div>

              <div className="rounded-lg bg-background/70 p-4 backdrop-blur-md lg:col-span-2">
                <Skeleton className="mb-4 h-10 w-3/4" />

                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-5 w-28" />
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  <Skeleton className="h-7 w-20 rounded-full" />
                  <Skeleton className="h-7 w-24 rounded-full" />
                  <Skeleton className="h-7 w-16 rounded-full" />
                </div>

                <div className="mb-8">
                  <Skeleton className="mb-3 h-7 w-32" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                </div>

                <div className="mb-6">
                  <Skeleton className="mb-2 h-6 w-28" />
                  <Skeleton className="h-5 w-40" />
                </div>

                <div>
                  <Skeleton className="mb-4 h-6 w-36" />
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className="text-center">
                        <Skeleton className="relative mb-2 aspect-[2/3] w-full rounded-lg" />
                        <Skeleton className="mx-auto h-5 w-24" />
                        <Skeleton className="mx-auto mt-1 h-4 w-16" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
