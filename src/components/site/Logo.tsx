import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

/** Brand wordmark lockup — transparent webp, sized by height. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label={`${site.name} — home`}
    >
      <Image
        src="/mumbai-logo.webp"
        alt={`${site.name} — ${site.tagline}`}
        width={600}
        height={148}
        priority
        className="h-9 w-auto sm:h-11"
      />
    </Link>
  );
}
