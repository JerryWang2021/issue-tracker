import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

export default async function Home() {
  const issueData = [
    { label: "Open Issues", status: "OPEN" },
    { label: "In-progress Issues", status: "IN_PROGRESS" },
    { label: "Closed Issues", status: "CLOSED" },
  ];

  const issueCounts = await Promise.all(
    issueData.map(async (item) => {
      return {
        label: item.label,
        status: item.status,
        count: await prisma.issue.count({ where: { status: item.status } }),
      };
    }),
  );

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary data={issueCounts} />
        <IssueChart data={issueCounts} />;
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of the issues",
};
