import React from 'react';
import { Table, TableBody, TableRow, TableContainer, TableHead, Paper, IconButton, Pagination } from '@mui/material';
import { TableContainerStyled, Header, TableHeader, FirstTableHeader, PaginationContainer, PageInfo, StyledTableRow, StyledTableCell, StyledLink } from './Table.styled';
import RedoIcon from '@mui/icons-material/Redo';
import avatar from '../../assets/images/Charlotte-Cooper.svg';

interface HeaderConfig {
  label: string;
  key: string;
}

interface TableComponentProps<T extends { id: number }> {
  title: string;
  headers: HeaderConfig[];
  data: T[];
  page: number;
  rowsPerPage: number;
  totalRows: number;
  onChangePage: (newPage: number) => void;
  linkPrefix: string;
  showAvatar?: boolean;
}

const TableComponent = <T extends { id: number }>({
  title,
  headers,
  data,
  page,
  rowsPerPage,
  totalRows,
  onChangePage,
  linkPrefix,
  showAvatar = false,
}: TableComponentProps<T>) => {
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = data.slice(startIndex, endIndex);

  return (
    <TableContainerStyled>
      <Header>
        <h2>{title}</h2>
        <IconButton>
          <RedoIcon />
        </IconButton>
      </Header>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) =>
                index === 0 ? (
                  <FirstTableHeader key={header.key}>{header.label}</FirstTableHeader>
                ) : (
                  <TableHeader key={header.key}>{header.label}</TableHeader>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row) => (
              <StyledTableRow key={row.id}>
                {headers.map((header, index) => (
                  <StyledTableCell key={header.key}>
                    {index === 0 ? (
                      <StyledLink to={`/${linkPrefix}/${row.id}`}>
                        {showAvatar && (
                          <img src={avatar} alt="avatar" width={20} height={20} style={{ marginRight: '25px', verticalAlign: 'middle' }} />
                        )}
                        {String(row[header.key as keyof T])}
                      </StyledLink>
                    ) : (
                      String(row[header.key as keyof T])
                    )}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationContainer>
          <Pagination
            count={Math.ceil(totalRows / rowsPerPage)}
            page={page}
            onChange={(event, page) => onChangePage(page)}
            shape="rounded"
            variant="outlined"
            hidePrevButton
            hideNextButton
          />
          <PageInfo>
            Page {page} of {Math.ceil(totalRows / rowsPerPage)}
          </PageInfo>
        </PaginationContainer>
      </TableContainer>
    </TableContainerStyled>
  );
};

export default TableComponent;
