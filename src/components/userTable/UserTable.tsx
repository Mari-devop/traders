import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BallotIcon from '@mui/icons-material/Ballot';
import {
  UserPageContainer,
  Header,
  Table,
  TableColumn,
  TableRow,
  TableHeader,
  TableCell,
  BackButton,
  TableBodyContainer,
} from './UserTable.styled';
import { Supplier, Customer, Employee, Product, Order } from '../../types'; 

type UserData = Supplier | Customer | Employee | Product | Order;

interface UserPageProps {
  title: string;
  data: UserData[];
  headers: Array<{ label: string; key: string }>;
  backLink: string;
}

const UserPage: React.FC<UserPageProps> = ({ title, data, headers, backLink }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = data.find(d => d.id.toString() === id);

  console.log("Data passed to UserPage:", data);
  console.log("Current item:", item);

  if (!item) {
    return <p>{title} not found</p>;
  }

  const midIndex = Math.ceil(headers.length / 2);
  const firstColumnHeaders = headers.slice(0, midIndex);
  const secondColumnHeaders = headers.slice(midIndex);

  return (
    <UserPageContainer>
      <Header>
        <h2><BallotIcon />{title} Information</h2>
      </Header>
      <Table>
        <tbody>
          <TableBodyContainer>
            <TableColumn>
              {firstColumnHeaders.map(header => (
                <TableRow key={header.key}>
                  <TableHeader>{header.label}</TableHeader>
                  <TableCell>
                    {header.key === 'supplier' && 'supplier' in item ? (
                      <Link to={`/suppliers/${item.id}`}>
                        {(item as Product).supplier}
                      </Link>
                    ) : (
                      String(item[header.key as keyof UserData])
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableColumn>
            <TableColumn>
              {secondColumnHeaders.map(header => (
                <TableRow key={header.key}>
                  <TableHeader>{header.label}</TableHeader>
                  <TableCell>
                    {header.key === 'supplier' && 'supplier' in item ? (
                      <Link to={`/suppliers/${item.id}`}>
                        {(item as Product).supplier}
                      </Link>
                    ) : (
                      String(item[header.key as keyof UserData])
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableColumn>
          </TableBodyContainer>
        </tbody>
      </Table>
      <BackButton onClick={() => navigate(backLink)}>Go back</BackButton>
    </UserPageContainer>
  );
};

export default UserPage;
