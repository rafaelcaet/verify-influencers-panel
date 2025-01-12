import { ShieldCheck } from "lucide-react";

export default function LoadingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-t from-black via-green-950 to-black  flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
      <div className="flex items-center gap-4 text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 animate-bounce">
        <ShieldCheck className="text-green-500" size={70} />
        <span>VerifyInfluencers</span>
      </div>
    </section>
  );
}
