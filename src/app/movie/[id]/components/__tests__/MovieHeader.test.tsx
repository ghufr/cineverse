import { MovieDetail } from "@/types/movie";
import { render, screen } from "@testing-library/react";
import { MovieHeader } from "../MovieHeader";

const mockMovie: MovieDetail = {
  id: 1,
  title: "Test Movie",
  release_date: "2023-01-01",
  vote_average: 8.5,
  runtime: 120,
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Sci-Fi" },
  ],
  overview: "An amazing test movie.",
  adult: false,
  backdrop_path: "",
  budget: 0,
  homepage: "",
  imdb_id: "",
  original_language: "en",
  original_title: "Test Movie",
  popularity: 100,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  revenue: 0,
  spoken_languages: [],
  status: "Released",
  tagline: "",
  video: false,
  vote_count: 1000,
};

describe("MovieHeader", () => {
  it("renders all movie header details correctly", () => {
    render(<MovieHeader movie={mockMovie} />);
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
    expect(screen.getByText("8.5/10")).toBeInTheDocument();
    expect(screen.getByText("2h 0m")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Sci-Fi")).toBeInTheDocument();
  });
});
