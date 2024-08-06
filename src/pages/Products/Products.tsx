import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TableComponent from '../../components/table/Table';
import { Product, ApiResponse, Log } from '../../types';
import { fetchProducts } from '../../api/fetch';
import { useLogs } from '../../context/LogsContext';

const Products: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const { addLog } = useLogs();

  const { data, error, isLoading } = useQuery<ApiResponse<Product>>(['products', page, rowsPerPage], () => fetchProducts(page, rowsPerPage), {
    keepPreviousData: true,
    onSuccess: (data) => {
      if (data.logs) {
        data.logs.forEach((log: Log) => addLog(log));
      }
    }
  });

  const handleReload = () => {
    window.location.reload();
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

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
  const products = data.data;

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Quantity Per Unit', key: 'quantityPerUnit' },
    { label: 'Unit Price', key: 'unitPrice' },
    { label: 'Units In Stock', key: 'unitsInStock' },
    { label: 'Units in Order', key: 'unitsOnOrder' },
  ];

  return (
    <TableComponent
      title="Products"
      headers={headers}
      data={products}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      onReload={handleReload}
      linkPrefix="products"
      showAvatar={false} 
    />
  );
};

export default Products;
