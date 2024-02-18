import React from 'react'
import { Button, Table, TableBody, TableRow } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '@/prisma/client'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()

  return (
    <div>
      <div className='mb-5'>
        <Button><Link href='/issues/new'>New Issue</Link></Button>
      </div>
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
              {issue.title}
              <div className='block md:hidden'>{issue.status}</div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.status}</Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
          </TableRow>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  )
}

export default IssuesPage
