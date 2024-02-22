import prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import DleleteIssueButton from './DleleteIssueButton'
import EditIssueButton from './EditIssueButton'
import IssueDetails from './IssueDetails'

interface Props {
    params: {id: string}
}


const IssueDetailPage = async ({params}: Props) => {
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id)}
    })
    
    if (!issue) 
    notFound()

    return (
        <Grid columns={{ initial: '1', sm: '5'}} gap="5">
            <Box className='md:col-span-4'>
                <IssueDetails issue={issue}/>
            </Box>
            <Box>
                <Flex direction="column" gap="4">
                    <EditIssueButton issueId={issue.id}/>
                    <DleleteIssueButton issueId={issue.id}/>
                </Flex>
            </Box>
        </Grid>
    )
}

export default IssueDetailPage
