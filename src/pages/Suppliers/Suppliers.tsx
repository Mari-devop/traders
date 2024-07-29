import React, { useState } from 'react';
import TableComponent from '../../components/table/Table';
import { suppliersData } from '../../mockData/SuppliersMockData';

const Suppliers: React.FC = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const totalRows = suppliersData.length;

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
      title="Suppliers"
      headers={headers}
      data={suppliersData}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      linkPrefix="suppliers"
      showAvatar={true} 
    />
  );
};

export default Suppliers;
