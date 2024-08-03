import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SearchResults from '../../components/searchResult/SearchResult';
import { Product, Customer,  ApiCustomer, ApiProduct } from '../../types';
import { Container, SearchBar, RadioWrapper, Results } from './Search.styled';
import { useQuery } from 'react-query';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/products`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data.map((product: ApiProduct) => ({
    id: product.productId.toString(),
    name: product.name,  
    quantityPerUnit: product.quantityPerUnit,
    unitPrice: product.price,
    unitsInStock: product.stock,
    unitsOnOrder: product.orders,
  }));
};

const fetchCustomers = async (): Promise<Customer[]> => {
  const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/customers`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data.map((customer: ApiCustomer): Customer => ({
    id: customer.customerId.toString(),
    company: customer.company,
    contact: customer.contact,
    title: customer.title,
    address: customer.address,
    city: customer.city,
    postalCode: customer.postalCode,
    region: customer.region,
    country: customer.country,
    phone: customer.phone,
    fax: customer.fax,
  }));
};

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [table, setTable] = useState<string>('products');
  const [results, setResults] = useState<Product[] | Customer[]>([]);
  const [searched, setSearched] = useState<boolean>(false);

  const { data: products } = useQuery('products', fetchProducts);
  const { data: customers } = useQuery('customers', fetchCustomers);

  const handleSearch = () => {
    setSearched(true);
    if (table === 'products' && products) {
      setResults(products.filter(product => 
        product.name.toLowerCase().includes(keyword.toLowerCase())  
      ));
    } else if (customers) {
      setResults(customers.filter(customer => 
        customer.company.toLowerCase().includes(keyword.toLowerCase())
      ));
    }
  };

  useEffect(() => {
    if (keyword === '') {
      setResults([]);
      setSearched(false);
    }
  }, [keyword]);

  useEffect(() => {
    setResults([]);
    setSearched(false);
  }, [table]);

  return (
    <Container>
      <SearchBar>
        <label>Search Database</label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') handleSearch() }}
          />
          <SearchIcon 
            onClick={handleSearch} 
            className='search' 
            style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}
          />
        </div>
      </SearchBar>
      <RadioWrapper>
        <label>Tables</label>
        <div>
          <input
            type="radio"
            id="products"
            name="table"
            value="products"
            checked={table === 'products'}
            onChange={(e) => setTable(e.target.value)}
          />
          <label htmlFor="products">Products</label>
          <input
            type="radio"
            id="customers"
            name="table"
            value="customers"
            checked={table === 'customers'}
            onChange={(e) => setTable(e.target.value)}
            style={{ marginLeft: '20px' }}
          />
          <label htmlFor="customers">Customers</label>
        </div>
      </RadioWrapper>
      <Results>
        <h2>Search Results</h2>
        {searched && results.length === 0 ? (
          <p>No results</p>
        ) : (
          <SearchResults results={results} table={table} />
        )}
      </Results>
    </Container>
  );
};

export default Search;
