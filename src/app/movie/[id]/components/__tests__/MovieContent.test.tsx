import { MovieCast, MovieCredits, MovieCrew, MovieDetail } from "@/types/movie";
import { fireEvent, render, screen } from "@testing-library/react";
import MovieContent from "../MovieContent";

const mockRouter = {
  back: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

const mockMovie: MovieDetail = {
  id: 1,
  title: "Test Movie",
  release_date: "2023-01-01",
  vote_average: 8.5,
  runtime: 120,
  genres: [{ id: 1, name: "Action" }],
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

const mockCast = [
  {
    id: 1,
    name: "Actor One",
    character: "Character A",
    profile_path: "/actor1.jpg",
  },
] as MovieCast[];

const mockCrew = [
  { id: 1, name: "Director One", job: "Director" },
] as MovieCrew[];

const mockCredits: MovieCredits = {
  id: 1,
  cast: mockCast,
  crew: mockCrew,
};

describe("MovieContent", () => {
  it("renders movie content and handles back button click", () => {
    render(<MovieContent movie={mockMovie} credits={mockCredits} />);
    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Director One")).toBeInTheDocument();
    expect(screen.getByText("Actor One")).toBeInTheDocument();

    const backButton = screen.getByText("Go Back");
    fireEvent.click(backButton);
    expect(mockRouter.back).toHaveBeenCalled();
  });
});
