import { CategoryFilter } from "@/app/components/CategoryFilter";
import { MovieCategory } from "@/types/movie";
import { SearchBar } from "./SearchBar";

export default function PageHeader({
  searchQuery,
  selectedCategory,
  onSearch,
  onCategoryChange,
}: {
  searchQuery: string;
  selectedCategory: MovieCategory;
  onSearch: (query: string) => void;
  onCategoryChange: (category: MovieCategory) => void;
}) {
  return (
    <div className="mb-4 flex w-full flex-col justify-between gap-4 lg:flex-row">
      <div className="w-full lg:max-w-md">
        <SearchBar onSearch={onSearch} value={searchQuery} />
      </div>
      <div className="w-full overflow-x-auto">
        {!searchQuery && (
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        )}
      </div>
    </div>
  );
}
