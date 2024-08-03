export interface Supplier {
  id: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
  homePage: string;
}

export interface ApiSupplier {
  id: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  city: string;
  country: string;
  address: string;
  region: string;
  postalCode: string;
  phone: string;
  fax: string;
  homePage: string;
}

export interface ApiSupplierResponse {
  totalCount: number;
  data: Supplier[];
}

export interface Customer {
  id: string;
  company: string;
  contact: string;
  title: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  phone: string;
  fax: string;
}

export interface ApiCustomer {
  customerId: string;
  company: string;
  contact: string;
  title: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  phone: string;
  fax: string;
}

export interface Log {
  logs: string;
  logsData: string;
  resultsCount: number;
}

export interface ApiResponse<T> {
  totalCount: number;
  data: T[];
  logs?: Log[];
}

export interface Employee {
  id: string;
  name: string;
  lastName: string;
  firstName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: string;
  hireDate: string;
  region: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  homePhone: string;
  extension: string;
  notes: string;
  reportsTo: string | null;
  supervisorID: string | null;
  supervisorLastName: string;
  supervisorFirstName: string;
}

export interface ApiEmployee {
  employeeId: string;
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  titleOfCourtesy: string;
  birthDate: string;
  hireDate: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  homePhone: string;
  extension: string;
  notes: string;
  reportsTo: string | null;
  supervisorLastName: string;
  supervisorFirstName: string;
}

export interface Product {
  id: string;
  name: string;
  supplierID: string;
  supplierName: string;
  categoryID: string;
  quantityPerUnit: string;
  unitPrice: string;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: number;
}

export interface ApiProductResponse {
  totalCount: number;
  data: ApiProduct[];
  logs?: Log[];
}

export interface ApiProduct {
  productId: number;
  name: string;
  productName: string;
  supplierID: number;
  supplierName: string;
  categoryID: number;
  quantityPerUnit: string;
  price: string;
  stock: number;
  orders: number;
  reorderLevel: number;
  discontinued: number;
}

export interface ProductOrder {
  productId: string;
  productName: string;
  quantity: number;
  orderPrice: string;
  totalPrice: string;
  discount: string;
}

export interface Order {
  id: string;
  customerId: string;
  totalPrice: string;
  totalProducts: number;
  totalQuantity: number;
  totalDiscount: string;
  shipName: string;
  shipVia: string;
  freight: string;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  products: ProductOrder[];
}

export interface ApiOrderResponse {
  totalCount: number;
  data: ApiOrder[];
  logs?: Log[]; 
}

export interface ApiOrder {
  id: string;
  orderId: string;
  customerId: string;
  totalPrice: string;
  totalProducts: number;
  totalQuantity: number;
  totalDiscount: string;
  shipName: string;
  shipVia: string;
  freight: string;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  products: ProductOrder[]; 
}
