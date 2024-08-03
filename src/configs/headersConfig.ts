import { Customer, Employee, Order, Supplier, Product } from '../types';

export const supplierHeaders: { label: string; key: keyof Supplier }[] = [
    { label: 'Company Name', key: 'companyName' },
    { label: 'Contact Name', key: 'contactName' },
    { label: 'Contact Title', key: 'contactTitle' },
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'Region', key: 'region' },
    { label: 'Postal Code', key: 'postalCode' },
    { label: 'Country', key: 'country' },
    { label: 'Phone', key: 'phone' },
];
  
export const customerHeaders: { label: string; key: keyof Customer }[] = [
    { label: 'Company Name', key: 'company' },
    { label: 'Contact Name', key: 'contact' },
    { label: 'Contact Title', key: 'title' },
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'Postal Code', key: 'postalCode' },
    { label: 'Region', key: 'region' },
    { label: 'Country', key: 'country' },
    { label: 'Phone', key: 'phone' },
    { label: 'Fax', key: 'fax' },
];

export const employeeHeaders: { label: string; key: keyof Employee }[] = [
    { label: 'Name', key: 'name' },
    { label: 'Title', key: 'title' },
    { label: 'Title Of Courtesy', key: 'titleOfCourtesy' },
    { label: 'Birth Date', key: 'birthDate' },
    { label: 'Hire Date', key: 'hireDate' },
    { label: 'Address', key: 'address' },
    { label: 'City', key: 'city' },
    { label: 'Postal Code', key: 'postalCode' },
    { label: 'Region', key: 'region' },
    { label: 'Country', key: 'country' },
    { label: 'Home Phone', key: 'homePhone' },
    { label: 'Extension', key: 'extension' },
    { label: 'Notes', key: 'notes' },
    { label: 'Reports To', key: 'reportsTo' },
  ];

export const productHeaders: { label: string; key: keyof Product }[] = [
    { label: 'Product Name', key: 'name' },
    { label: 'Supplier', key: 'supplierName' },
    { label: 'Quantity Per Unit', key: 'quantityPerUnit' },
    { label: 'Unit Price', key: 'unitPrice' },
    { label: 'Units In Stock', key: 'unitsInStock' },
    { label: 'Units in Order', key: 'unitsOnOrder' },
    { label: 'Reorder Level', key: 'reorderLevel' },
    { label: 'Discontinued', key: 'discontinued' },
];

export const orderHeaders: { label: string; key: keyof Order }[] = [
    { label: 'Customer id', key: 'customerId' },
    { label: 'Ship Name', key: 'shipName' },
    { label: 'Total Products', key: 'totalProducts' },
    { label: 'Total Quantity', key: 'totalQuantity' },
    { label: 'Total Price', key: 'totalPrice' },
    { label: 'Total Discount', key: 'totalDiscount' },
    { label: 'Ship Via', key: 'shipVia' },
    { label: 'Freight', key: 'freight' },
    { label: 'Order Date', key: 'orderDate' },
    { label: 'Required Date', key: 'requiredDate' },
    { label: 'Shipped Date', key: 'shippedDate' },
    { label: 'Shipped City', key: 'shipCity' },
    { label: 'Ship Region', key: 'shipRegion' },
    { label: 'Ship Postal Code', key: 'shipPostalCode' },
    { label: 'Ship Country', key: 'shipCountry' },
];
  

  