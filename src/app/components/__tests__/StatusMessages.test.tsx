import { Movie } from "@/types/movie";
import { render, screen } from "@testing-library/react";
import StatusMessages from "../StatusMessages";

const mockMovies = [
  {
    id: 1,
    title: "Inception",
    poster_path: "/inception.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
  },
] as Movie[];

describe("StatusMessages", () => {
  it("renders search query message", () => {
    render(
      <StatusMessages
        searchQuery="Inception"
        movies={mockMovies}
        isLoading={false}
        hasNextPage={true}
      />,
    );
    expect(
      screen.getByText('Search results for "Inception"'),
    ).toBeInTheDocument();
  });

  it('renders "no movies found" for search', () => {
    render(
      <StatusMessages
        searchQuery="NonExistentMovie"
        movies={[]}
        isLoading={false}
        hasNextPage={false}
      />,
    );
    expect(
      screen.getByText("No movies found for your search."),
    ).toBeInTheDocument();
  });

  it('renders "no movies available" when not searching', () => {
    render(
      <StatusMessages
        searchQuery=""
        movies={[]}
        isLoading={false}
        hasNextPage={false}
      />,
    );
    expect(screen.getByText("No movies available.")).toBeInTheDocument();
  });

  it('renders "no more movies to load"', () => {
    render(
      <StatusMessages
        searchQuery=""
        movies={mockMovies}
        isLoading={false}
        hasNextPage={false}
      />,
    );
    expect(screen.getByText("No more movies to load.")).toBeInTheDocument();
  });
});
