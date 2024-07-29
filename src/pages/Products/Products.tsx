import React, { useState } from 'react';
import TableComponent from '../../components/table/Table';
import { Product } from '../../types';

interface ProductsProps {
  data: Product[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;
  const totalRows = data.length;

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Qt per unit', key: 'quantityPerUnit' },
    { label: 'Price', key: 'unitPrice' },
    { label: 'Stock', key: 'unitsInStock' },
    { label: 'Orders', key: 'unitsInOrder' },
  ];

  return (
    <TableComponent
      title="Products"
      headers={headers}
      data={data}
      page={page}
      rowsPerPage={rowsPerPage}
      totalRows={totalRows}
      onChangePage={handleChangePage}
      linkPrefix="products"
      showAvatar={false} 
    />
  );
};

export default Products;
