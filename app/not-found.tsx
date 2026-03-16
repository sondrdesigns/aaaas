import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-brand-accent font-bold text-6xl mb-4">404</div>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Page Not Found</h1>
      <p className="text-lg text-text-muted max-w-md mx-auto mb-8">
        The page you are looking for does not exist or has been moved. Return to the academy&apos;s homepage to continue exploring.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
