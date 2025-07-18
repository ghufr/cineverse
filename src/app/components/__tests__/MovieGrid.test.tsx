import { Movie } from "@/types/movie";
import { render, screen } from "@testing-library/react";
import MovieGrid from "../MovieGrid";

const mockMovies = [
  {
    id: 1,
    title: "Movie 1",
    poster_path: "/test1.jpg",
    release_date: "2023-01-01",
    vote_average: 8.5,
  },
  {
    id: 2,
    title: "Movie 2",
    poster_path: "/test2.jpg",
    release_date: "2023-01-02",
    vote_average: 8.0,
  },
] as Movie[];

describe("MovieGrid", () => {
  it("renders a grid of movies", () => {
    render(<MovieGrid movies={mockMovies} isLoading={false} />);
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });

  it("renders skeleton loaders when loading", () => {
    render(<MovieGrid movies={[]} isLoading={true} />);
    expect(screen.getAllByTestId("movie-card-skeleton")).toHaveLength(20);
  });
});
