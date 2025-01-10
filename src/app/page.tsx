import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(120,50%,30%,40%),hsl(150,45%,35%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800">
          Facts, Not Fad!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Make it easier for people to find honest, evidence-based guidance.
        </p>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <Card>
          <CardHeader>
            <div className="text-accent font-semibold mb-8">TESTE</div>
            <CardTitle className="text-xl font-bold"> $1 /month</CardTitle>
            <CardDescription>pricing page visits/month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="text-lg w-full rounded-lg">Get Started</Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
