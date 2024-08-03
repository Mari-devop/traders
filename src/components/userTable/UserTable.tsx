import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import BallotIcon from '@mui/icons-material/Ballot';
import { ProductOrder, Log } from '../../types';
import {
  UserPageContainer,
  Header,
  Table,
  TableColumn,
  TableRow,
  TableRow2,
  TableHeader,
  TableCell,
  BackButton,
  TableBodyContainer,
  TableBody2Container
} from './UserTable.styled';
import { useLogs } from '../../context/LogsContext';

interface UserPageProps<T> {
  title: string;
  headers: Array<{ label: string; key: keyof T }>;
  backLink: string;
  fetchFunction: (id: string) => Promise<{ customer?: T; employee?: T; order?: T; product?: T; supplier?: T; logs: Log[] }>;
}

const hasProducts = <T extends { products?: ProductOrder[] }>(item: T): item is T & { products: ProductOrder[] } => {
  return item.products !== undefined;
};

const UserPage = <T,>({ title, headers, backLink, fetchFunction }: UserPageProps<T>) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addLog } = useLogs();

  const { data, error, isLoading } = useQuery<{ customer?: T; employee?: T; order?: T; product?: T; supplier?: T; logs: Log[] }>([title.toLowerCase(), id], () => fetchFunction(id!), {
    enabled: !!id,
    onSuccess: (data) => {
      if (data.logs) {
        data.logs.forEach((log: Log) => addLog(log));
      }
    }
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>{title} not found</p>;
  }

  const entity = data.customer || data.employee || data.order || data.product || data.supplier;

  if (!entity) {
    return <p>{title} data not available</p>;
  }

  const dynamicHeaders = headers.filter(header => {
    if (header.key === 'reportsTo') {
      return entity['reportsTo' as keyof T];
    }
    return true;
  });

  const midIndex = Math.ceil(dynamicHeaders.length / 2);
  const firstColumnHeaders = dynamicHeaders.slice(0, midIndex);
  const secondColumnHeaders = dynamicHeaders.slice(midIndex);

  const renderValue = (key: keyof T, value: unknown): React.ReactNode => {
    if (key === 'supplierName' && typeof value === 'string') {
      const supplierID = entity['supplierID' as keyof T] as string;
      return <Link to={`/suppliers/${supplierID}`}>{value}</Link>;
    }
    if (key === 'customerId' && typeof value === 'string') {
      return <Link to={`/customers/${value}`}>{value}</Link>;
    }
    if (key === 'reportsTo' && typeof value === 'string') {
      const supervisorID = entity['supervisorID' as keyof T] as string;
      return <Link to={`/employees/${supervisorID}`}>{value}</Link>;
    }
    return value === undefined || value === null ? '' : String(value);
  };

  const renderProductLink = (product: ProductOrder): React.ReactNode => {
    return (
      <Link to={`/products/${product.productId}`}>{product.productName}</Link>
    );
  };

  return (
    <UserPageContainer>
      <Header>
        <h2><BallotIcon /> {title} Information</h2>
      </Header>
      <Table>
        <TableBodyContainer>
          <tr>
            <td>
              <TableColumn>
                {firstColumnHeaders.map(header => (
                  <TableRow key={String(header.key)}>
                    <TableHeader>{header.label}</TableHeader>
                    <TableCell>
                      {renderValue(header.key, entity[header.key])}
                    </TableCell>
                  </TableRow>
                ))}
              </TableColumn>
            </td>
            <td>
              <TableColumn>
                {secondColumnHeaders.map(header => (
                  <TableRow key={String(header.key)}>
                    <TableHeader>{header.label}</TableHeader>
                    <TableCell>
                      {renderValue(header.key, entity[header.key])}
                    </TableCell>
                  </TableRow>
                ))}
              </TableColumn>
            </td>
          </tr>
        </TableBodyContainer>
      </Table>
      {hasProducts(entity) && entity.products.length > 0 && (
        <>
          <Header>
            <h2>Products</h2>
          </Header>
          <Table className="striped">
            <thead>
              <TableRow2>
                <TableHeader className="first-column">Product</TableHeader>
                <TableHeader>Quantity</TableHeader>
                <TableHeader>Order Price</TableHeader>
                <TableHeader>Total Price</TableHeader>
                <TableHeader>Discount</TableHeader>
              </TableRow2>
            </thead>
            <TableBody2Container as="tbody">
              {entity.products.map((product, index) => (
                <TableRow2 key={product.productId} className={index % 2 === 0 ? "striped" : ""}>
                  <TableCell className="first-column">{renderProductLink(product)}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.orderPrice}</TableCell>
                  <TableCell>{product.totalPrice}</TableCell>
                  <TableCell>{product.discount}</TableCell>
                </TableRow2>
              ))}
            </TableBody2Container>
          </Table>
        </>
      )}
      <BackButton onClick={() => navigate(backLink)}>Go back</BackButton>
    </UserPageContainer>
  );
};

export default UserPage;
