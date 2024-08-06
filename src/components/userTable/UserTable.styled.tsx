import styled from 'styled-components';

export const UserPageContainer = styled.div`
  margin: 60px 0;
  padding: 0px;
  background-color: var(--white-color);
  border: 1px solid var(--gray-lightest-color);
  border-radius: 5px;
  width: 84vw;

  @media (max-width: 1728px) {
    width: 82vw;
  } 

  @media (max-width: 1566px) {
    width: 80vw;
  } 

  @media (max-width: 1430px) {
    width: 78vw;
  } 

  @media (max-width: 1285px) {
    width: 76vw;
  } 

  @media (max-width: 1175px) {
    width: 74vw;
  } 

  @media (max-width: 1080px) {
    width: 72vw;
  }

  @media (max-width: 1020px) {
    width: 92vw;
  }

  @media (max-width: 749px) {
    width: 88vw;
  }
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
    padding-left: 25px;
    font-weight: 800;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  

  &.striped tbody tr.striped {
   background-color: rgb(249 250 251);
  }
`;

export const TableBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
`;

export const TableBody2Container = styled.tbody`
  display: flex;
  flex-direction: column;
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: 23vw;
  margin-right: 350px;

  @media (max-width: 749px) {
    width: 100%;
    margin-right: 100px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 15px;
  font-size: 16px;
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
