import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background p-4 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between md:px-8">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          Cineverse
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
