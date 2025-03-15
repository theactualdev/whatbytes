"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; 
import StatUpdate from "@/components/StatUpdate";
import Image from "next/image";
import {
  Line,
  LineChart,
  Pie,
  PieChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Progress } from "@/components/ui/progress";

export default function Skill() {
  const stat = useSelector((state: RootState) => state.stat);
  const stats = [
    { label: "Your Score", value: stat.rank, icon: "/trophy.png" },
    { label: "Percentile", value: stat.percentile, icon: "/r-clipboard.png" },
    { label: "Correct answers", value: stat.score, icon: "/check.png" },
  ];
  const data = [
    { name: 0, numberOfStudents: 2 },
    { name: 10, numberOfStudents: 5 },
    { name: 20, numberOfStudents: 10 },
    { name: 30, numberOfStudents: 20 },
    { name: 40, numberOfStudents: 35 },
    { name: 50, numberOfStudents: 50 },
    { name: 60, numberOfStudents: 40 },
    { name: 70, numberOfStudents: 20 },
    { name: 80, numberOfStudents: 10 },
    { name: 90, numberOfStudents: 5 },
    { name: stat.percentile ?? 0, numberOfStudents: 2 },
    { name: 100, numberOfStudents: 2 },
  ];
  return (
    <div className="pl-10 py-7 text-slate-500">
      <h1 className="">Skill Test</h1>
      <div className="flex gap-10">
        <div className="mt-5 space-y-4 max-w-1/2">
          <StatUpdate />
          <div className="mt-5 border border-[var(--border)] p-4 rounded-md w-fit">
            <h2 className="text-black font-medium">Quick Statistics</h2>
            <div className="flex">
              {stats.map((statis, index) => (
                <div
                  className="flex border-r px-2 gap-3 border-r-[var(--border)] py-4 "
                  key={index}
                >
                  <div className="bg-[var(--border)] px-2 py-[1px] flex items-center rounded-full">
                    <Image
                      src={statis.icon}
                      width={15}
                      height={12}
                      alt={statis.label}
                    />
                  </div>
                  <div>
                    <p className="font-black text-black">
                      {" "}
                      {statis.value} {index === 2 && "/ 15"}{" "}
                      {index === 1 && "%"}{" "}
                    </p>
                    <p className="uppercase text-xs"> {statis.label} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h2>Comparison Graph</h2>
            <div className="mt-5">
              <div className="flex gap-4">
                <p className="text-sm">
                  You scored {stat.percentile} which is lower than the average
                  percentile of 72% of all the engineers who took this
                  assessment
                </p>
                <div className="bg-[var(--border)] rounded-full items-center flex">
                  <Image
                    src={"/chart.png"}
                    width={24}
                    height={24}
                    alt="Chart Icon"
                  />
                </div>
              </div>
              <div className="min-w-full min-h-[full]">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="numberOfStudents"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <ReferenceLine
                      x={stat.percentile ?? 0}
                      stroke="gray"
                      strokeWidth={1}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-10">
          <div className="border border-[var(--border)] p-6 rounded-md w-fit">
            <h2 className="text-black font-medium">Syllabus wise analysis</h2>
            <div className="space-y-4">
              <div className="mt-10 space-y-4">
                <p className="text-sm">HTML Tools, Forms, History</p>
                <div className="flex justify-between items-center gap-5">
                  <Progress value={80} className="min-w-[270px]" />
                  <p>80%</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm">Tags & References in HTML</p>
                <div className="flex justify-between items-center gap-5">
                  <Progress value={60} className="min-w-[270px]" />
                  <p>60%</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm">Tables & References in HTML</p>
                <div className="flex justify-between items-center gap-5">
                  <Progress value={24} className="min-w-[270px]" />
                  <p>24%</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm">Tables & CSS Basics</p>
                <div className="flex justify-between items-center gap-5">
                  <Progress value={96} className="min-w-[270px]" />
                  <p>96%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[var(--border)] space-y-4 p-6 rounded-md w-[90%]">
            <div className="flex justify-between text-black">
              <h2 className="font-medium">Question Analysis</h2>
              <p className="text-blue-600">{stat.score}/15</p>
            </div>
            <p>
              {" "}
              <span className="font-medium">
                You scored {stat.score} questions out of 15.
              </span>{" "}
              However it still needs improvements{" "}
            </p>
            <div className="flex items-center justify-center">
              <PieChart width={200} height={250}>
                <Pie
                  data={[
                    { name: "Correct", value: stat.score, fill: "#4caf50" },
                    {
                      name: "Incorrect",
                      value: 15 - stat.score,
                      fill: "#f44336",
                    },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
