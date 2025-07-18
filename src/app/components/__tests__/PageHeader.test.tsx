import { fireEvent, render, screen } from "@testing-library/react";
import PageHeader from "../PageHeader";

describe("PageHeader", () => {
  const onSearch = jest.fn();
  const onCategoryChange = jest.fn();

  it("renders search bar and category filter", () => {
    render(
      <PageHeader
        searchQuery=""
        selectedCategory="popular"
        onSearch={onSearch}
        onCategoryChange={onCategoryChange}
      />,
    );
    expect(
      screen.getByPlaceholderText("Search for movies..."),
    ).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
  });

  it("calls onSearch when typing in search bar", () => {
    render(
      <PageHeader
        searchQuery=""
        selectedCategory="popular"
        onSearch={onSearch}
        onCategoryChange={onCategoryChange}
      />,
    );
    fireEvent.change(screen.getByPlaceholderText("Search for movies..."), {
      target: { value: "test" },
    });
    expect(onSearch).toHaveBeenCalledWith("test");
  });
});
