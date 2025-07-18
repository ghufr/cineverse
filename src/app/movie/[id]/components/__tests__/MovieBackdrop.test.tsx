import { render, screen } from "@testing-library/react";
import MovieBackdrop from "../MovieBackdrop";

describe("MovieBackdrop", () => {
  it("renders the backdrop image", () => {
    render(<MovieBackdrop backdropPath="/test.jpg" title="Test Movie" />);
    const image = screen.getByAltText("Test Movie");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w1280/test.jpg",
    );
  });
});
