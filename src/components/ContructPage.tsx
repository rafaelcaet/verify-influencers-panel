import { ArrowLeft, Construction } from "lucide-react";
import Link from "next/link";

export default function ConstructPage() {
  return (
    <div className="bg-background">
      <div className="flex text-3xl gap-5 lg:text-4xl xl:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800">
        <div className="flex flex-col gap-2 items-center">
          <span className="flex gap-3">
            {" "}
            <Construction className="text-green-600" size={50} /> We are working
            on it{" "}
          </span>
          <span className="text-3xl">
            This page is still under construction, but we are working hard to
            build this wonder for you!
          </span>
          <span className="text-2xl">
            how about taking a look at your stats?
          </span>
          <Link href="/">
            <p className="flex mt-8 text-xl font-semibold items-center hover:underline cursor-pointer text-center text-green-500">
              <ArrowLeft className="text-green-500" size={25} /> back to
              dashboard
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
