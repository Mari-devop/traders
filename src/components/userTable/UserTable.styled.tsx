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
  margin-bottom: 20px;
`;

export const TableBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%; 
  border-bottom: 1px solid var(--border-color);
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5px 0px 15px;
`;

export const TableHeader = styled.div`
  font-weight: 800;
  text-align: left;
  padding: 8px 5px 0px 8px;
  color: var(--primary-text-color);
  width: 50%;
`;

export const TableCell = styled.div`
  padding: 8px;
  color: var(--primary-text-color);
  width: 50%;
   
  a {
    color: var(--link-color);
    text-decoration: none;
  }
`;

export const BackButton = styled.button`
  padding: 10px 15px;
  margin: 0 20px 20px;
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
