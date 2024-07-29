import React, { useState } from 'react';
import TableComponent from '../../components/table/Table';
import { Customer } from '../../types';

interface CustomersProps {
  data: Customer[];
}

const Customers: React.FC<CustomersProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const totalRows = data.length;

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

  return (
    <TableComponent
      title="Customers"
      headers={headers}
      data={data}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      linkPrefix="customers"
      showAvatar={true}
    />
  );
};

export default Customers;
