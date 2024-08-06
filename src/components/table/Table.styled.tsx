import styled from 'styled-components';
import { TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

export const TableContainerStyled = styled.div`
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  font-family: var(--font-family);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-text-color);
  font-size: 11px;
  background-color: var(--white-color);
  border-bottom: 1px solid var(--gray-lightest-color);
  padding: 10px 15px;
  font-family: var(--font-family);

  h2 {
    margin: 0px;
  }

  svg {
    color: var(--primary-text-color);
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1021px) {
   width: 90vw;
   background-color: transparent;
  }

  @media (max-width: 667px) {
    width: 86vw; 
  }

  @media (max-width: 472px) {
    width: 81vw; 
  }
`;

export const TableContainer = styled.div`
  background-color: var(--white-color);
  border: 1px solid var(--gray-lightest-color);
  width: 100%;
  font-family: var(--font-family);
  width: 84vw;

  @media (max-width: 1830px) {
    width: 82vw; 
  }

  @media (max-width: 1620px) {
    width: 80vw; 
  }

  @media (max-width: 1435px) {
    width: 78vw; 
  }

  @media (max-width: 1290px) {
    width: 76vw; 
  }

  @media (max-width: 1175px) {
    width: 74vw; 
  }

  @media (max-width: 1090px) {
    width: 72vw; 
  }

  @media (max-width: 1021px) {
    display: none;
  }
`;

export const ResponsiveTableContainer = styled.div`
  display: none;
  width: 100%;
  font-family: var(--font-family);

  @media (max-width: 1021px) {
    display: flex;
    flex-direction: column;
    width: 92vw;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-lightest-color);
    background-color: var(--white-color);
  }

  @media (max-width: 667px) {
    width: 89vw; 
  }

  @media (max-width: 472px) {
    width: 85vw; 
  }
`;

export const TableHeader = styled(TableCell)`
  font-weight: 900 !important;
  font-size: 16px !important;
  text-align: left;
  padding: 10px !important;
  border: none !important;
  font-family: var(--font-family) !important;
`;

export const FirstTableHeader = styled(TableHeader)`
  padding-left: 60px !important;
`;

export const StyledTableCell = styled(TableCell)`
  display: flex;
  align-items: center;
  font-size: 16px !important;
  font-weight: 500 !important;
  padding: 7px 10px !important;
  font-family: var(--font-family);
  color: var(--black-color);

  &.no-avatar {
    padding-left: 10px !important;
  }

  &:first-of-type {
    flex-grow: 1;
    justify-content: center;
    color: var(--link-color);
  }
`;

export const ResponsiveTableCell = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid var(--gray-lightest-color);

  .resp-header {
    font-weight: 600;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--link-color);
  font-family: var(--font-family);
  
  &:hover {
    cursor: pointer;
  }

  img {
    border-radius: 50%;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgb(249 250 251);
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

export const ResponsiveTableRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  border: 1px solid var(--gray-lightest-color);
  color: var(--black-color);
  width: 100%; 
`;

export const ResponsiveTableAvatarCell = styled(ResponsiveTableCell)`
  justify-content: center;
  padding: 10px;

  img {
    border-radius: 50%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  border: 0.5px solid var(--border-color);
  margin-top: 20px;
  font-family: var(--font-family);
`;

export const PageInfo = styled.div`
  font-size: 14px;
  color: var (--primary-text-color);
  font-family: var(--font-family);
`;
