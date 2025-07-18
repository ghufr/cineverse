import { Movie } from "@/types/movie";
import { render, screen } from "@testing-library/react";
import { MovieCard } from "../MovieCard";

const mockMovie = {
  id: 1,
  title: "Test Movie",
  poster_path: "/test.jpg",
  release_date: "2023-01-01",
  vote_average: 8.5,
} as Movie;

describe("MovieCard", () => {
  it("renders movie card with correct data", () => {
    render(<MovieCard movie={mockMovie} />);
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("8.5")).toBeInTheDocument();
  });
});
