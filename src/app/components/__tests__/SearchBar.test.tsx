import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "../SearchBar";

describe("SearchBar", () => {
  const onSearch = jest.fn();

  it("renders and calls onSearch on change", () => {
    render(<SearchBar onSearch={onSearch} value="" />);
    const input = screen.getByPlaceholderText("Search for movies...");
    fireEvent.change(input, { target: { value: "Dune" } });
    expect(onSearch).toHaveBeenCalledWith("Dune");
  });

  it("shows clear button when there is a value and calls onSearch on click", () => {
    render(<SearchBar onSearch={onSearch} value="Dune" />);
    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeInTheDocument();
    fireEvent.click(clearButton);
    expect(onSearch).toHaveBeenCalledWith("");
  });
});
