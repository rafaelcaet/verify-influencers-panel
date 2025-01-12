import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { ModeToggle } from "./ToggleButton/ToggleMode";

const topics = [
  {
    name: "Leaderboards",
    path: "/leaderboards",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Monetization",
    path: "/monetization",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Admin",
    path: "/admin",
  },
];

export function NavBar() {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full border-b border-green-900 z-10 dark:text-white text-black bg-background/95">
      <nav className="flex items-center gap-10 container font-medium">
        <Link href="/" className="flex gap-3 mr-auto">
          <BrandLogo />
        </Link>
        {topics.map((topic, index) => (
          <Link
            key={index}
            className="text-base hover:text-green-400"
            href={`${topic.path}`}
          >
            {topic.name}
          </Link>
        ))}
        <span className="text-base hover:text-green-400">Sign out</span>
        <div className="ml-10">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
