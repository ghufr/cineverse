import { movieCategories } from "@/constants/movie";
import { fireEvent, render, screen } from "@testing-library/react";
import { CategoryFilter } from "../CategoryFilter";

describe("CategoryFilter", () => {
  const onCategoryChange = jest.fn();

  it("renders category buttons and calls onCategoryChange on click", () => {
    render(
      <CategoryFilter
        selectedCategory="popular"
        onCategoryChange={onCategoryChange}
      />,
    );

    movieCategories.forEach((category) => {
      const button = screen.getByText(category.label);
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(onCategoryChange).toHaveBeenCalledWith(category.key);
    });
  });
});
