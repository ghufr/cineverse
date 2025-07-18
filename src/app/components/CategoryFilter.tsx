"use client";

import { Button } from "@/components/ui/button";
import { movieCategories } from "@/constants/movie";
import type { MovieCategory } from "@/types/movie";

interface CategoryFilterProps {
  selectedCategory: MovieCategory;
  onCategoryChange: (category: MovieCategory) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex justify-start gap-2 lg:justify-end">
      {movieCategories.map((category) => (
        <Button
          key={category.key}
          variant={selectedCategory === category.key ? "default" : "ghost"}
          onClick={() => onCategoryChange(category.key)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
