import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";

const researchConfig = [
  {
    title: "Specific Influencer",
    descriptions: "Research a known health influencer by name",
  },
  {
    title: "Discovery New",
    descriptions: "Find and analyze new health influencers",
  },
];
const timeRange = ["Last Week", "Last Month", "Last Year", "All Time"];

export default function Admin() {
  return (
    <main className="my-32 container p-4">
      <div className="max-w-[768px]">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex text-green-500 cursor-pointer">
              <ArrowLeft />
              <p className="hover:underline">Back to Dashboard</p>
            </div>
          </Link>
          <h1 className="text-4xl font-bold">Research Tasks</h1>
        </div>
      </div>

      {/* RESEARCH SECTION */}
      <div className="mt-7">
        <Card className="dark:bg-[#121212]">
          <CardHeader>
            <div className="flex gap-3 items-center">
              <Settings className="text-green-500" />
              <p className="font-semibold text-xl">Research Configuration</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 justify-center">
              {researchConfig.map((item, index) => (
                <Card
                  key={index}
                  className="dark:hover:bg-green-300/20 cursor-pointer dark:hover:border-green-400 hover:border-green-400 hover:bg-green-100 dark:bg-[#171717] px-24"
                >
                  <CardContent className="flex flex-col items-center justify-center mt-5">
                    <p className="font-semibold">{item.title}</p>
                    <span className="text-sm text-gray-500">
                      {" "}
                      {item.descriptions}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col pl-9 max-w-[565px] mt-5 gap-1">
              <p className="p-1 text-sm font-light">Time Range</p>
              <div className="grid grid-cols-2 gap-2">
                {timeRange.map((item, index) => (
                  <Card
                    key={index}
                    className=" flex dark:hover:bg-green-300/20 cursor-pointer hover:border-green-400 hover:bg-green-100 dark:hover:border-green-400 dark:hover:text-green-400 hover:text-green-500 dark:bg-[#171717] items-center justify-center p-2"
                  >
                    <p className=" text-sm">{item}</p>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
