import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-foreground">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
