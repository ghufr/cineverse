import type { paths } from "@/types/tmdb";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A utility type to extract the successful JSON response type
 * from a given API path and method.
 */
export type TmdbResponse<
  Path extends keyof paths,
  Method extends keyof paths[Path] = "get",
> = paths[Path][Method] extends {
  responses: { 200: { content: { "application/json": infer T } } };
}
  ? T
  : never;

export const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};
