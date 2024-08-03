import styled from 'styled-components';

export const UserPageContainer = styled.div`
  margin: 70px 0;
  padding: 0px;
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  width: 1100px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  
  h2 {
    font-size: 16px;
    color: var(--primary-text-color);
    display: flex;
    gap: 10px;
    padding-left: 15px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  border-bottom: 1px solid var(--border-color);

  &.striped tbody tr.striped {
    background-color: var(--gray-lighter-color);
  }
`;

export const TableBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableBody2Container = styled.tbody`
  display: flex;
  flex-direction: column;
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 100%;
  margin-right: 350px;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 15px;
  font-size: 15px;
  font-weight: 500;
`;

export const TableRow2 = styled.tr`
  display: flex;
  flex-direction: row;
  padding-left: 10px;

  & > th, & > td {
    flex: 1;
    padding: 8px;
  }

  & > .first-column {
    flex: 2;
  }
`;

export const TableHeader = styled.th`
  font-weight: 800;
  text-align: left;
  padding: 8px 5px 0px 8px;
  color: var(--primary-text-color);
`;

export const TableCell = styled.td`
  padding: 8px;
  color: var(--primary-text-color);
   
  a {
    color: var(--link-color);
    text-decoration: none;
  }
`;

export const BackButton = styled.button`
  padding: 10px 15px;
  margin: 20px 20px 20px;
  font-size: 18px;
  background-color: var(--danger-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--danger-hover-color);
  }
`;
