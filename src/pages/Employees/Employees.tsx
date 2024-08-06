import React, { useState } from 'react';
import { useQuery } from 'react-query';
import TableComponent from '../../components/table/Table';
import { ApiResponse, Employee, Log } from '../../types';
import { useLogs } from '../../context/LogsContext';
import { fetchEmployees } from '../../api/fetch';

const Employees: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const { addLog } = useLogs();

  const { data, error, isLoading } = useQuery<ApiResponse<Employee>>(['employees', page, rowsPerPage], () => fetchEmployees(page, rowsPerPage), {
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
    { label: 'Name', key: 'name' },
    { label: 'Title', key: 'title' },
    { label: 'City', key: 'city' },
    { label: 'Phone', key: 'phone' },
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
  const employees = data.data;

  return (
    <TableComponent
      title="Employees"
      headers={headers}
      data={employees}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      onReload={handleReload}
      linkPrefix="employees"
      showAvatar={true}
    />
  );
};

export default Employees;