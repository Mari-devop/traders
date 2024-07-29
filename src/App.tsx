import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Suppliers from './pages/Suppliers/Suppliers';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import Employees from './pages/Employees/Employees';
import Customers from './pages/Customers/Customers';
import Search from './pages/Search/Search';
import Navbar from './components/navbar/Navbar';
import UserPage from './components/userTable/UserTable';
import { suppliersData } from './mockData/SuppliersMockData';
import { customersData } from './mockData/CustomersMockData';
import { employeesData } from './mockData/EmployeesMockData';
import { productsData } from './mockData/ProductsMockData';
import { ordersData } from './mockData/OrdersMockData';
import { supplierHeaders, customerHeaders, employeeHeaders, productHeaders, orderHeaders } from './configs/headersConfig';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '250px', paddingTop: '64px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route
            path="/suppliers/:id"
            element={
              <UserPage
                title="Supplier"
                data={suppliersData}
                headers={supplierHeaders}
                backLink="/suppliers"
              />
            }
          />
          <Route path="/products" element={<Products data={productsData} />} />
          <Route
            path="/products/:id"
            element={
              <UserPage
                title="Product"
                data={productsData}
                headers={productHeaders}
                backLink="/products"
              />
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/orders/:id"
            element={
              <UserPage
                title="Order"
                data={ordersData}
                headers={orderHeaders}
                backLink="/orders"
              />
            }
          />
          <Route path="/employees" element={<Employees />} />
          <Route
            path="/employees/:id"
            element={
              <UserPage
                title="Employee"
                data={employeesData}
                headers={employeeHeaders}
                backLink="/employees"
              />
            }
          />
          <Route path="/customers" element={<Customers data={customersData} />} />
          <Route
            path="/customers/:id"
            element={
              <UserPage
                title="Customer"
                data={customersData}
                headers={customerHeaders}
                backLink="/customers"
              />
            }
          />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
