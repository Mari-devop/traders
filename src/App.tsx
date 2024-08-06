import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Suppliers from './pages/Suppliers/Suppliers';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import Employees from './pages/Employees/Employees';
import Customers from './pages/Customers/Customers';
import Search from './pages/Search/Search';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import UserPage from './components/userTable/UserTable';
import { customerHeaders, employeeHeaders, orderHeaders, productHeaders, supplierHeaders } from './configs/headersConfig';
import { fetchCustomerById, fetchEmployeeById, fetchOrderById, fetchProductById, fetchSupplierById } from './api/fetch';

const ContentContainer = styled.div`
  margin-left: 250px;
  padding-top: 64px;
  padding: 20px;

  @media (max-width: 1021px) {
    margin-left: 20px;
  }
`;

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location, navigate]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/suppliers/:id" element={<UserPage title="Supplier" headers={supplierHeaders} backLink="/suppliers" fetchFunction={fetchSupplierById} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<UserPage title="Product" headers={productHeaders} backLink="/products" fetchFunction={fetchProductById} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<UserPage title="Order" headers={orderHeaders} backLink="/orders" fetchFunction={fetchOrderById} />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<UserPage title="Employee" headers={employeeHeaders} backLink="/employees" fetchFunction={fetchEmployeeById} />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<UserPage title="Customer" headers={customerHeaders} backLink="/customers" fetchFunction={fetchCustomerById} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </ContentContainer>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
