import React from 'react'
import { Button, Table, TableBody, TableRow } from '@radix-ui/themes'
import prisma from '@/prisma/client'
import IssueStatusBadge from '../components/IssueStatusBadge'
import delay from 'delay'
import IssueActions from './IssueActions'
import Link from 'next/link'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()
  await delay(2000)

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

export default IssuesPage
