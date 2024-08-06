import { useEffect } from 'react';
import { Table, TableBody, TableRow, TableHead, Pagination } from '@mui/material';
import {
  TableContainerStyled, TableContainer, Header, TableHeader, FirstTableHeader, PaginationContainer,
  PageInfo, StyledTableRow, StyledTableCell, StyledLink, ResponsiveTableRow, ResponsiveTableCell,
  ResponsiveTableContainer, ResponsiveTableAvatarCell
} from './Table.styled';
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
  linkPrefix,
  showAvatar = false,
}: TableComponentProps<T>) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <TableContainerStyled>
      <TableContainer>
        <Header>
          <h2>{title}</h2>
          <button onClick={() => window.location.reload()}>
            <RedoIcon />
          </button>
        </Header>
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
            onChange={(_, newPage) => onChangePage(newPage)}
            shape="rounded"
            variant="outlined"
            hidePrevButton
            hideNextButton
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '1.2rem',
                minWidth: '2.5rem',
                minHeight: '2.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                '&:hover': {
                  border: '1px solid #000',
                },
                '&.Mui-selected': {
                  border: '1px solid #999',
                  '&:hover': {
                    border: '1px solid #999',
                    backgroundColor: 'transparent',
                  },
                },
              },
            }}
          />
          <PageInfo>
            Page {page} of {Math.ceil(totalRows / rowsPerPage)}
          </PageInfo>
        </PaginationContainer>
      </TableContainer>
      <ResponsiveTableContainer>
        <Header>
          <h2>{title}</h2>
          <button onClick={() => window.location.reload()}>
            <RedoIcon />
          </button>
        </Header>
        {data.map((row) => (
          <ResponsiveTableRow key={row.id}>
            {showAvatar && (
              <ResponsiveTableAvatarCell>
                <img src={avatar} alt="avatar" width={96} height={96} />
              </ResponsiveTableAvatarCell>
            )}
            {headers.map((header) => (
              <ResponsiveTableCell key={`${row.id}-${header.key}`}>
                <span className="resp-header">{header.label}</span>
                <span>
                  {header.key === 'id' || header.key === 'company' || header.key === 'name' || header.key === 'companyName' ? (
                    <StyledLink to={`/${linkPrefix}/${row.id}`}>
                      {String(row[header.key as keyof T])}
                    </StyledLink>
                  ) : (
                    String(row[header.key as keyof T])
                  )}
                </span>
              </ResponsiveTableCell>
            ))}
          </ResponsiveTableRow>
        ))}
        <PaginationContainer>
          <Pagination
            count={Math.ceil(totalRows / rowsPerPage)}
            page={page}
            onChange={(_, newPage) => onChangePage(newPage)}
            shape="rounded"
            variant="outlined"
            hidePrevButton
            hideNextButton
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '1.2rem',
                minWidth: '2.5rem',
                minHeight: '2.5rem',
                backgroundColor: '#FFFFFF',
                border: 'none',
                '&:hover': {
                  border: '1px solid #000',
                },
                '&.Mui-selected': {
                  border: '1px solid #999',
                  '&:hover': {
                    border: '1px solid #999',
                    backgroundColor: '#FFFFFF',
                  },
                },
              },
            }}
          />
          <PageInfo>
            Page {page} of {Math.ceil(totalRows / rowsPerPage)}
          </PageInfo>
        </PaginationContainer>
      </ResponsiveTableContainer>
    </TableContainerStyled>
  );
};

export default TableComponent;
