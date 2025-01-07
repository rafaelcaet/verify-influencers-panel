import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { SunMoon } from "lucide-react";
import { ModeToggle } from "./ToggleButton/ToggleMode";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full z-10 dark:text-white text-black bg-background/95">
      <nav className="flex items-center gap-10 container font-medium">
        <Link href="/" className="flex gap-3 mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-lg" href="/#leaderboards">
          Leaderboards
        </Link>
        <Link className="text-lg" href="/#products">
          Products
        </Link>
        <Link className="text-lg" href="#">
          Monetization
        </Link>
        <Link className="text-lg" href="#">
          About
        </Link>
        <Link className="text-lg" href="#">
          Contact
        </Link>
        <Link className="text-lg" href="#">
          Admin
        </Link>
        <span className="text-lg">Sign out</span>
        <div className="ml-10">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
