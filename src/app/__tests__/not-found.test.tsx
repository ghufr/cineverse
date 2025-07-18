import { render, screen } from "@testing-library/react";
import NotFound from "../not-found";

describe("NotFound Page", () => {
  it("renders the 404 page correctly", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(screen.getByText("Go back home")).toBeInTheDocument();
  });
});
