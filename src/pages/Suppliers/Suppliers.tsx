import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TableComponent from '../../components/table/Table';
import { Supplier, ApiResponse, Log } from '../../types';
import { fetchSuppliers } from '../../api/fetch';
import { useLogs } from '../../context/LogsContext';

const Suppliers: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const { addLog } = useLogs();

  const { data, error, isLoading, refetch } = useQuery<ApiResponse<Supplier>>(['suppliers', page, rowsPerPage], () => fetchSuppliers(page, rowsPerPage), {
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
    { label: 'Company', key: 'companyName' },
    { label: 'Contact', key: 'contactName' },
    { label: 'Title', key: 'contactTitle' },
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
  const suppliers = data.data;

  return (
    <TableComponent
      title="Suppliers"
      headers={headers}
      data={suppliers}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      onReload={handleReload}
      linkPrefix="suppliers"
      showAvatar={true}
    />
  );
};

export default Suppliers;
