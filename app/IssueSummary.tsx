import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface IssueCount {
  label: string;
  status: Status;
  count: number;
}

interface Props {
  data: IssueCount[];
}

const IssueSummary = ({ data }: Props) => {
  return (
    <Flex gap="4">
      {data.map((item) => (
        <Card key={item.label}>
          <Flex direction={"column"} gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${item.status}`}
            >
              {item.label}
            </Link>
            <Text size="5" className="font-bold">
              {item.count}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
