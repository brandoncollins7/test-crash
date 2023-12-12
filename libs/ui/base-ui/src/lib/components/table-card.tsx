import {Card, CardHeader, CardBody, Table, Thead, Tr, Th, Tbody, Td, TableContainer} from '@chakra-ui/react'

interface TableCardProps {
  cardHeader?: React.ReactNode
  headers: (string | React.ReactNode)[]
  data?: (string | React.ReactNode)[][]
}

export const TableCard = ({cardHeader, headers, data}: TableCardProps) => {
  return (
    <Card bg="white" boxShadow="base" rounded="lg">
      {cardHeader && <CardHeader>{cardHeader}</CardHeader>}
      <CardBody p={0}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {headers.map((header, idx) => (
                  <Th key={idx}>{header}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data?.length !== 0 &&
                data.map((row, idx) => (
                  <Tr key={idx}>
                    {row.map((cell, colIdx) => (
                      <Td key={colIdx}>{cell}</Td>
                    ))}
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  )
}
