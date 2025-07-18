import { fireEvent, render, screen } from "@testing-library/react";
import ErrorPage from "../error";

describe("Error Component", () => {
  const reset = jest.fn();
  const error = new Error("Test error message");

  it("renders error message and reset button", () => {
    render(<ErrorPage error={error} reset={reset} />);
    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    expect(screen.getByText("Test error message")).toBeInTheDocument();

    const resetButton = screen.getByText("Try again");
    fireEvent.click(resetButton);
    expect(reset).toHaveBeenCalled();
  });
});
