import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { fetchCustomerById, fetchEmployeeById, fetchOrderById, fetchProductById, fetchSupplierById  } from './api/fetch';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '250px', paddingTop: '64px', padding: '20px' }}>
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
      </div>
    </Router>
  );
};

export default App;
