import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { ModeToggle } from "./ToggleButton/ToggleMode";
import { useState } from "react";
import { ProgressDemo } from "./ProgressBar"; // Certifique-se de importar a barra de progresso

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
  const [loading, setLoading] = useState(false);

  const handleLinkClick = (path: string) => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = path;
    }, 1000);
  };

  return (
    <>
      <header className="flex flex-col gap-3 py-6 fixed top-0 w-full z-10 dark:text-white text-black bg-background/95">
        <nav className="flex items-center gap-10 container font-medium">
          <Link href="/" className="flex gap-3 mr-auto">
            <BrandLogo />
          </Link>
          {topics.map((topic, index) => (
            <span
              key={index}
              className="text-base font-semibold hover:text-green-500 cursor-pointer"
              onClick={() => handleLinkClick(topic.path)}
            >
              {topic.name}
            </span>
          ))}
          <span className="ml-5 text-base border border-green-500 rounded-lg p-2 text-green-500 hover:text-green-400 cursor-pointer">
            Login / Sign in
          </span>
          <ModeToggle />
        </nav>
        {loading && <ProgressDemo />}
      </header>
    </>
  );
}
