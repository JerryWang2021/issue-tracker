import { Skeleton } from '@/app/components'
import { Table, TableBody, TableRow } from '@radix-ui/themes'
import IssueActions from './IssueActions'

const issues = [1,2,3,4,5]

const LoadingIssuesPage = () => {
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
          <TableRow key={issue}>
            <Table.Cell>
              <Skeleton />
              <div className='block md:hidden'>
              <Skeleton />
              </div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>
                <Skeleton />
            </Table.Cell>
          </TableRow>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  )
}

export default LoadingIssuesPage
