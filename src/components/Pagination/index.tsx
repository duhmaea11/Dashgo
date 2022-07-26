import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number
    registerPerPage?: number
    currentPage?: number
    onPageChange: (page: number) => void
}

const sibLingsCount = 1

function generatePagesArray(from: number, to: number) {
    return [... new Array(to - from)]
        .map((_, index) => {
            return from + index + 1
        })
        .filter(page => page > 0)
}

export function Pagination({
    totalCountOfRegisters,
    registerPerPage = 10,
    currentPage = 1,
    onPageChange
 }: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegisters / registerPerPage)

    const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - sibLingsCount, currentPage -1 )
    : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage,  Math.min(currentPage + sibLingsCount, lastPage))
    : []

    return (
        <Stack
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">

                {currentPage > (1 + sibLingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1}/>
                        { currentPage > (2 + sibLingsCount) && 
                            <Text color="gray.300" width="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                })}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent/>

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page}/>
                })}

                {(currentPage + sibLingsCount) < lastPage && (
                    <>
                        { (currentPage + 1 + sibLingsCount) < lastPage && 
                            <Text color="gray.300" width="8" textAlign="center">...</Text>}
                        <PaginationItem onPageChange={onPageChange} number={lastPage}/>
                    </>
                )}
            </Stack>
        </Stack>
    )
}