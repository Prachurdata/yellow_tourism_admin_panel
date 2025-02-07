"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/ui/overview";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface RevenueChartProps {
  data: any[];
}

const colorSchemes = {
  blue: {
    backgroundColor: "rgba(6, 182, 212, 0.5)",
    borderColor: "rgb(6, 182, 212)",
  },
  purple: {
    backgroundColor: "rgba(147, 51, 234, 0.5)",
    borderColor: "rgb(147, 51, 234)",
  },
  green: {
    backgroundColor: "rgba(34, 197, 94, 0.5)",
    borderColor: "rgb(34, 197, 94)",
  },
  orange: {
    backgroundColor: "rgba(249, 115, 22, 0.5)",
    borderColor: "rgb(249, 115, 22)",
  },
};

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const [barColor, setBarColor] = useState("blue");
  const [lineColor, setLineColor] = useState("purple");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Bar Chart Overview</CardTitle>
          <Select value={barColor} onValueChange={setBarColor}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Chart Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[400px] w-full">
            <Overview 
              data={data} 
              type="bar"
              colors={colorSchemes[barColor as keyof typeof colorSchemes]} 
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Line Chart Overview</CardTitle>
          <Select value={lineColor} onValueChange={setLineColor}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Chart Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[400px] w-full">
            <Overview 
              data={data} 
              type="line"
              colors={colorSchemes[lineColor as keyof typeof colorSchemes]} 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 