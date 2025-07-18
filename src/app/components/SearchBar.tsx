"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  value: string;
}

export const SearchBar = ({ onSearch, value }: SearchBarProps) => {
  const handleClear = () => {
    onSearch("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative">
      <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search for movies..."
        value={value}
        onChange={handleChange}
        className="py-3 pr-12 pl-10 text-foreground"
      />
      {value && (
        <Button
          type="button"
          variant="link"
          size="sm"
          onClick={handleClear}
          className="absolute top-1/2 right-2 -translate-y-1/2 transform text-muted-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
