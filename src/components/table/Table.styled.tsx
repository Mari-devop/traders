import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

export const TableContainerStyled = styled.div`
  padding: 70px 0px;
  width: 1100px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-text-color);
  font-size: 11px;
  background-color: var(--white-color);
  border-radius: 5px;
  border: 0.5px solid var(--border-color);
  padding: 2px 15px;

  h2 {
    margin: 0px;
  }
`;

export const TableHeader = styled(TableCell)`
  font-weight: 900 !important;
  font-size: 16px !important;
  text-align: left;
  padding: 10px !important;
`;

export const FirstTableHeader = styled(TableHeader)`
  padding-left: 65px !important;
`;

export const StyledTableCell = styled(TableCell)`
  display: flex;
  align-items: center;
  font-size: 16px !important;
  padding: 7px 10px !important;

  &.no-avatar {
    padding-left: 10px !important;
  }

  &:first-of-type {
    flex-grow: 1;
    justify-content: center;
    color: var(--link-color);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: var(--gray-lighter-color);
  }
  &:nth-of-type(even) {
    background-color: var(--white-color);
  }
  & > * {
    border-bottom: none !important;
  }
  &:hover {
    background-color: var(--gray-lightest-color);
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 25px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--white-color);
  border-radius: 5px;
  border: 0.5px solid var(--border-color);
  margin-top: 20px;
`;

export const PageInfo = styled.div`
  font-size: 14px;
  color: var(--primary-text-color);
`;
