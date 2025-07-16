import type { paths } from './tmdb-schema';

/**
 * A utility type to extract the successful JSON response type
 * from a given API path and method.
 */
export type ApiResponse<
  Path extends keyof paths,
  Method extends keyof paths[Path] = 'get', // Defaults to 'get' method
> = paths[Path][Method] extends {
  responses: { 200: { content: { 'application/json': infer T } } };
}
  ? T
  : never;
