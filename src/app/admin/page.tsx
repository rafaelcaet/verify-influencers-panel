import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";

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
              <Card className="dark:hover:bg-green-300/20 dark:hover:border-green-400 dark:bg-[#171717] px-24">
                <CardContent className="flex flex-col items-center justify-center mt-5">
                  <p className="font-semibold">Specific Influencer</p>
                  <span className="text-sm text-gray-500">
                    {" "}
                    Research a known health influencer by name
                  </span>
                </CardContent>
              </Card>
              <Card className="dark:hover:bg-green-300/20 dark:hover:border-green-400 dark:bg-[#171717] px-24">
                <CardContent className="flex flex-col items-center justify-center mt-5">
                  <p className="font-semibold">Discovery New</p>
                  <span className="text-sm text-gray-500">
                    {" "}
                    Find and analyze new health influencers
                  </span>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col pl-9 max-w-[565px] mt-5 gap-1">
              <p className="p-1 text-sm font-light">Time Range</p>
              <div className="grid grid-cols-2 gap-2">
                <Card className=" flex dark:hover:bg-green-300/20 dark:hover:border-green-400 dark:hover:text-green-400 dark:bg-[#171717] items-center justify-center p-2">
                  <p className=" text-sm">Last Week</p>
                </Card>
                <Card className=" flex dark:hover:bg-green-300/20 dark:hover:border-green-400 dark:hover:text-green-400 dark:bg-[#171717] items-center justify-center">
                  <p className=" text-sm">Last Month</p>
                </Card>
                <Card className=" flex dark:hover:bg-green-300/20 dark:hover:border-green-400 dark:hover:text-green-400 dark:bg-[#171717] items-center justify-center p-2">
                  <p className=" text-sm">Last Year</p>
                </Card>
                <Card className=" flex dark:hover:bg-green-300/20 dark:hover:border-green-400 dark:hover:text-green-400 dark:bg-[#171717] items-center justify-center">
                  <p className=" text-sm">All Time</p>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
