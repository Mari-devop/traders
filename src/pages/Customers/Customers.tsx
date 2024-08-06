import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TableComponent from '../../components/table/Table';
import { fetchCustomers } from '../../api/fetch';
import { Customer, ApiResponse, Log } from '../../types';
import { useLogs } from '../../context/LogsContext';

const Customers: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const { addLog } = useLogs();

  const { data, error, isLoading } = useQuery<ApiResponse<Customer>>(['customers', page, rowsPerPage], () => fetchCustomers(page, rowsPerPage), {
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

  const headers = [
    { label: 'Company', key: 'company' },
    { label: 'Contact', key: 'contact' },
    { label: 'Title', key: 'title' },
    { label: 'City', key: 'city' },
    { label: 'Country', key: 'country' },
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
  const customers = data.data;

  return (
    <TableComponent
      title="Customers"
      headers={headers}
      data={customers}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      onReload={handleReload}
      linkPrefix="customers"
      showAvatar={true}
    />
  );
};

export default Customers;
