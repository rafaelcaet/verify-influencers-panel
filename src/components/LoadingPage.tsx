import { BrandLogo } from "./BrandLogo";

export default function LoadingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-t from-black via-green-950 to-black  flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 animate-bounce">
        <BrandLogo />
      </h1>
    </section>
  );
}
