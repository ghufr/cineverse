import { MovieCast } from "@/types/movie";
import { render, screen } from "@testing-library/react";
import CastList from "../CastList";

const mockCast = [
  {
    id: 1,
    name: "Actor One",
    character: "Character A",
    profile_path: "/actor1.jpg",
  },
  {
    id: 2,
    name: "Actor Two",
    character: "Character B",
    profile_path: "/actor2.jpg",
  },
] as MovieCast[];

describe("CastList", () => {
  it("renders a list of cast members", () => {
    render(<CastList cast={mockCast} />);
    expect(screen.getByText("Actor One")).toBeInTheDocument();
    expect(screen.getByText("Character A")).toBeInTheDocument();
    expect(screen.getByText("Actor Two")).toBeInTheDocument();
    expect(screen.getByText("Character B")).toBeInTheDocument();
  });
});
