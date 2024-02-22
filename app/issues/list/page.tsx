import prisma from '@/prisma/client'
import { Table, TableBody, TableRow } from '@radix-ui/themes'
import { IssueStatusBadge, Link} from '@/app/components'

import IssueActions from './IssueActions'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()

  return (
    <div>
      <IssueActions />
      <Table.Root variant='surface'>
        <Table.Header>
          <TableRow>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </TableRow>
        </Table.Header>
        <TableBody>
          {issues.map((issue) =>(
          <TableRow key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>
                {issue.title}
              </Link>
              <div className='block md:hidden'>
                <IssueStatusBadge status={issue.status}/>
              </div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>
            <IssueStatusBadge status={issue.status}/>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
          </TableRow>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  )
}

export const dynamic = 'force-dynamic'
// export const revalidate = 60;

export default IssuesPage
