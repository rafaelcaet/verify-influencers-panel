import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { ModeToggle } from "./ToggleButton/ToggleMode";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full border-b border-green-900 z-10 dark:text-white text-black bg-background/95">
      <nav className="flex items-center gap-10 container font-medium">
        <Link href="/" className="flex gap-3 mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-base hover:text-green-400" href="/leaderboards">
          Leaderboards
        </Link>
        <Link className="text-base hover:text-green-400" href="/#products">
          Products
        </Link>
        <Link className="text-base hover:text-green-400" href="#">
          Monetization
        </Link>
        <Link className="text-base hover:text-green-400" href="#">
          About
        </Link>
        <Link className="text-base hover:text-green-400" href="#">
          Contact
        </Link>
        <Link className="text-base hover:text-green-400" href="/admin">
          Admin
        </Link>
        <span className="text-base hover:text-green-400">Sign out</span>
        <div className="ml-10">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
