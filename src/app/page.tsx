import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Key } from "react";
import { IPlan } from "../interfaces/IPlan";
import { plans } from "../utils/plans";
import Link from "next/link";

const logoCount = 15;

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(120,50%,30%,40%),hsl(150,45%,35%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800">
          Facts, Not Fad!
        </h1>
        <p className="text-lg lg:text-3xl font-semibold max-w-screen-xl">
          Make it easier for people to find honest, evidence-based guidance.
        </p>
      </section>

      {/* PRICING */}
      <div className="w-full overflow-hidden bg-background py-2">
        <div className="flex animate-marquee space-x-12">
          {Array.from({ length: logoCount }).map((_, index) => (
            <BrandLogo key={index} />
          ))}
        </div>
      </div>
      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Choose your plan today
        </h2>
        <div className="flex gap-20 justify-center">
          {Object.entries(plans).map(([key, item]: [Key, IPlan]) => (
            <Card
              key={key}
              className={`w-72 ${
                item.name === "Professional Plan" ? "border-green-400" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-10 font-semibold mb-8">
                  <p>{item.name}</p>

                  {item.name === "Professional Plan" ? (
                    <span className="text-xs text-center p-2 text-white rounded-lg bg-green-400">
                      Popular
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <CardTitle className="text-xl font-bold">
                  {}${item.price} /month
                </CardTitle>
                <CardDescription>
                  {item.features.map((text, index) => (
                    <p key={index}>- {text}</p>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/products">
                  <Button className="text-lg dark:bg-green-400 bg-green-500 hover:bg-green-400 dark:hover:bg-green-200 w-full rounded-lg">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
