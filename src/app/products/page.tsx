import { Card, CardContent } from "@/components/ui/card";
import { plans } from "../../utils/plans";
import { Button } from "@/components/ui/button";
import { Verified } from "lucide-react";

export default function Products() {
  return (
    <>
      <main className="mt-32 container p-4 ">
        <div className="max-w-[768px]">
          <h1 className="text-4xl font-bold">
            Unlock the Power of Verified Health Advice
          </h1>
          <p className="mt-4 text-gray-600">
            Our range of plans ensures that anyone, from small businesses to
            large organizations, can benefit from trusted, evidence-based health
            verification.
          </p>
        </div>
      </main>
      {/* PLANS SECTION */}
      <section className="container justify-center flex flex-col gap-24 mt-6 mb-20">
        {Object.entries(plans).map(([key, item]) => (
          <div key={key}>
            <div className="flex mb-4 items-center gap-3">
              <p className="flex  items-center gap-3 font-bold text-2xl">
                <Verified /> {item.targetAudience}
              </p>
              {item.name === "Professional Plan" ? (
                <span className="text-xs text-center font-semibold p-2 text-white rounded-lg bg-green-400">
                  Most Popular
                </span>
              ) : (
                ""
              )}
            </div>
            <Card
              className={`flex w-auto items-center dark:bg-[#121212] ${
                item.name === "Professional Plan" ? "border-green-400" : ""
              }`}
            >
              <CardContent className="flex flex-grow items-center justify-between gap-10 mt-4">
                <div className="flex items-center gap-10">
                  <span className="text-2xl font-bold pl-6">
                    {item.name.split(" ")[0]}
                  </span>
                  <span className="font-semibold text-lg">
                    {}${item.price} /month
                  </span>
                  <span>
                    {item.features.map((text, index) => (
                      <p key={index}>• {text}</p>
                    ))}
                  </span>
                </div>
                <Button className="text-lg mr-20 dark:bg-green-400 bg-green-500 hover:bg-green-400 dark:hover:bg-green-200 w-72 rounded-lg">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
}
