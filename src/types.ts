export interface Supplier {
  id: number;
  company: string;
  contact: string;
  title: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  phone: string;
}

export interface Customer {
  id: number;
  company: string;
  contact: string;
  title: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  phone: string;
}

export interface Employee {
  id: number;
  name: string;
  title: string;
  courtesy: string;
  bdate: string;
  hdate: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  extension: string;
  notes: string;
  reports: string;
}

export interface Product {
  id: number;
  name: string;
  quantityPerUnit: string;
  unitPrice: string;
  unitsInStock: number;
  unitsInOrder: number;
  supplier: string;
  supplierId: number;
  reorderLevel: number;
  discontinued: boolean;
}

export interface Order {
  id: number;
  productId: number;
  totalPrice: string;
  products: number;
  quantity: number;
  shipped: string;
  city: string;
  country: string;
  customerId: string;
  totalDiscount: string;
  orderDate: string;
  requiredDate: string;
  shipVia: string;
  freight: string;
  shipName: string;
  shipRegion: string;
  shipPostalCode: string;
}
