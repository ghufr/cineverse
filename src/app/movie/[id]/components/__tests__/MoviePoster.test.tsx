import { render, screen } from "@testing-library/react";
import { MoviePoster } from "../MoviePoster";

describe("MoviePoster", () => {
  it("renders the movie poster", () => {
    render(<MoviePoster posterPath="/test.jpg" title="Test Movie" />);
    const image = screen.getByAltText("Test Movie");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500/test.jpg",
    );
  });
});
