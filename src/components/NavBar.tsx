import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto"></Link>
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
      </nav>
    </header>
  );
}
