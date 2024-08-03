import React, { useState } from 'react';
import TableComponent from '../../components/table/Table';
import { ApiOrderResponse } from '../../types';
import { useQuery } from 'react-query';
import { fetchOrders } from '../../api/fetch';
import { useLogs } from '../../context/LogsContext';
import { Log } from '../../types';

const Orders: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const { addLog } = useLogs();

  const { data, error, isLoading, refetch } = useQuery<ApiOrderResponse>(['orders', page, rowsPerPage], () => fetchOrders(page, rowsPerPage), {
    keepPreviousData: true,
    onSuccess: (data) => {
      if (data.logs) {
        data.logs.forEach((log: Log) => addLog(log));
      }
    }
  });

  const handleReload = () => {
    refetch();
  }

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const headers = [
    { label: 'Order ID', key: 'id' },
    { label: 'Total Price', key: 'totalPrice' },
    { label: 'Products', key: 'totalProducts' },
    { label: 'Quantity', key: 'totalQuantity' },
    { label: 'Shipped', key: 'shippedDate' },
    { label: 'Ship Name', key: 'shipName' },
    { label: 'City', key: 'shipCity' },
    { label: 'Country', key: 'shipCountry' },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const totalRows = data.totalCount;
  const orders = data.data;

  return (
    <TableComponent
      title="Orders"
      headers={headers}
      data={orders}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      onReload= {handleReload}
      linkPrefix="orders"
      showAvatar={false}
    />
  );
};

export default Orders;
