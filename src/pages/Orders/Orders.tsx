import React, { useState } from 'react';
import TableComponent from '../../components/table/Table';
import { ordersData } from '../../mockData/OrdersMockData';

const Orders: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const totalRows = ordersData.length;

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const headers = [
    { label: 'Id', key: 'productId' },
    { label: 'Total Price', key: 'totalPrice' },
    { label: 'Products', key: 'products' },
    { label: 'Quantity', key: 'quantity' },
    { label: 'Shipped', key: 'shipped' },
    { label: 'Ship Name', key: 'shipName' },
    { label: 'City', key: 'city' },
    { label: 'Country', key: 'country' },
  ];

  return (
    <TableComponent
      title="Orders"
      headers={headers}
      data={ordersData}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      linkPrefix="orders"
      showAvatar={false} 
    />
  );
};

export default Orders;
