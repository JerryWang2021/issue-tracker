"use client";

import { Status } from "@prisma/client";
import { Card } from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface IssueCount {
  label: string;
  status: Status;
  count: number;
}

interface Props {
  data: IssueCount[];
}

const IssueChart = ({ data }: Props) => {
  const chartData = data.map((item) => ({
    label: item.label,
    value: item.count,
  }));

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
