import React from 'react';
import { Table, TableBody, TableRow, TableContainer, TableHead, Paper, IconButton, Pagination } from '@mui/material';
import { TableContainerStyled, Header, TableHeader, FirstTableHeader, PaginationContainer, PageInfo, StyledTableRow, StyledTableCell, StyledLink } from './Table.styled';
import RedoIcon from '@mui/icons-material/Redo';
import avatar from '../../assets/images/Charlotte-Cooper.svg';

interface HeaderConfig {
  label: string;
  key: string;
}

interface TableComponentProps<T extends { id: string }> {
  title: string;
  headers: HeaderConfig[];
  data: T[];
  page: number;
  rowsPerPage: number;
  totalRows: number;
  onChangePage: (newPage: number) => void;
  onReload: () => void;
  linkPrefix: string;
  showAvatar?: boolean;
}

const TableComponent = <T extends { id: string }>({
  title,
  headers,
  data,
  page,
  rowsPerPage,
  totalRows,
  onChangePage,
  onReload,
  linkPrefix,
  showAvatar = false,
}: TableComponentProps<T>) => {
  return (
    <TableContainerStyled>
      <Header>
        <h2>{title}</h2>
        <IconButton onClick={onReload}>
          <RedoIcon />
        </IconButton>
      </Header>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) =>
                index === 0 && showAvatar ? (
                  <FirstTableHeader key={header.key}>{header.label}</FirstTableHeader>
                ) : (
                  <TableHeader key={header.key}>{header.label}</TableHeader>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                {headers.map((header) => (
                  <StyledTableCell key={`${row.id}-${header.key}`}>
                    {header.key === 'id' || header.key === 'company' || header.key === 'name' || header.key === 'companyName' ? (
                      <StyledLink to={`/${linkPrefix}/${row.id}`}>
                        {showAvatar && (header.key === 'company' || header.key === 'name' || header.key === 'companyName') && (
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
            onChange={(event, newPage) => onChangePage(newPage)}
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
