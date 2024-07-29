import React, { useState } from 'react';
import TableComponent from '../../components/table/Table';
import { employeesData } from '../../mockData/EmployeesMockData';

const Employees: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const totalRows = employeesData.length;

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

  return (
    <TableComponent
      title="Employees"
      headers={headers}
      data={employeesData}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      linkPrefix="employees"
      showAvatar={true}
    />
  );
};

export default Employees;
