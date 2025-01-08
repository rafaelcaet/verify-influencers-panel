import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartColumn, CircleCheckBig, Users2Icon } from "lucide-react";

const cardProps = [
  {
    icon: <Users2Icon className="text-green-500 size-8" />,
    description: "Active Influencers",
    text: "1,234",
  },
  {
    icon: <CircleCheckBig className="text-green-500 size-8" />,
    description: "Claims verified",
    text: "25,431",
  },
  {
    icon: <ChartColumn className="text-green-500 size-8" />,
    description: "Average Trust score",
    text: "85.7%",
  },
];

export default function Leaderboards() {
  return (
    <>
      <main className="my-32 container p-4">
        <div className="max-w-[768px]">
          <h1 className="text-4xl font-bold">Influencers Trust Leaderboard</h1>
          <p className="mt-4 text-gray-600">
            Real-time ranking of health influencers based on scientific
            accuracy, credibility, and transparency. Update daily using
            AI-powered analysis.
          </p>
        </div>

        {/* CARDS SECTION */}
        <section className="grid grid-cols-3 container gap-7 mt-10">
          {cardProps.map((prop, index) => (
            <>
              <Card className="dark:bg-[#121212] bg-gray-100">
                <CardContent>
                  <div className="flex gap-3 items-center mt-6" key={index}>
                    <span>{prop.icon}</span>
                    <div className="flex flex-col">
                      <p className="text-2xl font-bold">{prop.text}</p>
                      <p className="text-sm text-gray-500">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ))}
        </section>

        {/* FILTER SECTION */}
        <section className="flex container gap-2 mt-10">
          <div className="border rounded-full p-3 text-sm dark:bg-[#121212] bg-gray-100 hover:bg-green-300 dark:hover:bg-green-600">
            {" "}
            All
          </div>
          <div className="border rounded-full p-3 text-sm dark:bg-[#121212] bg-gray-100 hover:bg-green-300 dark:hover:bg-green-600">
            {" "}
            Nutrition
          </div>
          <div className="border rounded-full p-3 text-sm dark:bg-[#121212] bg-gray-100 hover:bg-green-300 dark:hover:bg-green-600">
            {" "}
            Fitness
          </div>
          <div className="border rounded-full p-3 text-sm dark:bg-[#121212] bg-gray-100 hover:bg-green-300 dark:hover:bg-green-600">
            {" "}
            Medicine
          </div>
          <div className="border rounded-full p-3 text-sm dark:bg-[#121212] bg-gray-100 hover:bg-green-300 dark:hover:bg-green-600">
            {" "}
            Mental Health
          </div>
        </section>

        {/* TABLE SECTION */}
        <section className="my-10">
          <div className="rounded-xl border border-gray-[#121212] bg-[#121212] overflow-hidden">
            <Table className="rounded-xl shadow">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">RANK</TableHead>
                  <TableHead>INFLUENCER</TableHead>
                  <TableHead>CATEGORY</TableHead>
                  <TableHead className="text-left">TRUST SCORE</TableHead>
                  <TableHead className="text-left">TREND</TableHead>
                  <TableHead className="text-left">FOLLOWERS</TableHead>
                  <TableHead className="text-left">VERIFY CLAIMS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium p-5">#1</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p>ShadCn</p>
                    </div>
                  </TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium p-5">#1</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p>ShadCn</p>
                    </div>
                  </TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                  <TableCell className="text-left text-xs">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </>
  );
}
