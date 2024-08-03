import { 
    Customer, 
    ApiResponse, 
    ApiCustomer, 
    Log, 
    Employee, 
    ApiEmployee,
    ApiOrder,
    ApiOrderResponse,
    Order,
    ProductOrder,
    ApiProduct,
    Product,
    Supplier,
    ApiSupplier
} from '../types';

export const fetchCustomers = async (page: number, rowsPerPage: number): Promise<ApiResponse<Customer>> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/customers?page=${page}&pageSize=${rowsPerPage}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: ApiResponse<ApiCustomer> = await response.json();
  
    return {
      totalCount: data.totalCount,
      data: data.data.map((customer: ApiCustomer): Customer => ({
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
      })),
      logs: data.logs ? data.logs.map((log: Log): Log => ({
        logsData: log.logsData,
        logs: log.logs,
        resultsCount: log.resultsCount
      })) : []
    };
  };

export const fetchCustomerById = async (id: string): Promise<{ customer: Customer; logs: Log[] }> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/customers/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    if (data.customer && data.customer.length > 0) {
      const customer = data.customer[0];
      return {
        customer: {
          id: customer.customerID,
          company: customer.companyName,
          contact: customer.contactName,
          title: customer.contactTitle,
          address: customer.address,
          city: customer.city,
          postalCode: customer.postalCode,
          region: customer.region,
          country: customer.country,
          phone: customer.phone,
          fax: customer.fax,
        },
        logs: data.logs ? data.logs.map((log: Log): Log => ({
          logsData: log.logsData,
          logs: log.logs,
          resultsCount: log.resultsCount
        })) : []
      };
    } else {
      throw new Error('Customer data is missing or malformed');
    }
  };


  export const fetchEmployees = async (page: number, rowsPerPage: number): Promise<ApiResponse<Employee>> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/employees?page=${page}&pageSize=${rowsPerPage}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    return {
      totalCount: parseInt(data.total, 10),
      data: data.data.map((employee: ApiEmployee): Employee => ({
        id: employee.employeeId.toString(),
        name: employee.name,
        lastName: employee.lastName,
        firstName: employee.firstName,
        title: employee.title,
        titleOfCourtesy: employee.titleOfCourtesy,
        birthDate: employee.birthDate,
        hireDate: employee.hireDate,
        address: employee.address,
        city: employee.city,
        region: employee.region,
        postalCode: employee.postalCode,
        country: employee.country,
        phone: employee.phone,
        homePhone: employee.phone,
        extension: employee.extension,
        notes: employee.notes,
        reportsTo: employee.reportsTo ? `${employee.supervisorFirstName} ${employee.supervisorLastName}` : null,
        supervisorID: employee.reportsTo,
        supervisorLastName: employee.supervisorLastName,
        supervisorFirstName: employee.supervisorFirstName,
      })),
      logs: data.logs ? data.logs.map((log: Log): Log => ({
        logsData: log.logsData,
        logs: log.logs,
        resultsCount: log.resultsCount
      })) : []
    };
  };
  
export const fetchEmployeeById = async (id: string): Promise<{ employee: Employee; logs: Log[] }> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/employees/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    if (data.employee && data.employee.length > 0) {
    const employee = data.employee[0];
    return {
    employee: {
        id: employee.employeeId,
        name: `${employee.firstName} ${employee.lastName}`,
        lastName: employee.lastName,
        firstName: employee.firstName,
        title: employee.title,
        titleOfCourtesy: employee.titleOfCourtesy,
        birthDate: employee.birthDate,
        hireDate: employee.hireDate,
        address: employee.address,
        city: employee.city,
        region: employee.region,
        postalCode: employee.postalCode,
        country: employee.country,
        phone: employee.phone,
        homePhone: employee.phone,
        extension: employee.extension,
        notes: employee.notes,
        reportsTo: employee.reportsTo ? `${employee.supervisorFirstName} ${employee.supervisorLastName}` : null,
        supervisorID: employee.reportsTo,
        supervisorLastName: employee.supervisorLastName,
        supervisorFirstName: employee.supervisorFirstName,
    },
    logs: data.logs ? data.logs.map((log: Log): Log => ({
        logsData: log.logsData,
        logs: log.logs,
        resultsCount: log.resultsCount
    })) : []
    };
    } else {
        throw new Error('Employee data is missing or malformed');
    }
};

export const fetchOrders = async (page: number, rowsPerPage: number): Promise<ApiOrderResponse> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/orders?page=${page}&pageSize=${rowsPerPage}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    return {
      totalCount: parseInt(data.total, 10),
      data: data.data.map((order: ApiOrder): Order => ({
        id: order.orderId.toString(),
        customerId: order.customerId,
        totalPrice: order.totalPrice,
        totalProducts: order.totalProducts,
        totalQuantity: order.totalQuantity,
        totalDiscount: order.totalDiscount,
        shipName: order.shipName,
        shipVia: order.shipVia,
        freight: order.freight,
        orderDate: order.orderDate,
        requiredDate: order.requiredDate,
        shippedDate: order.shippedDate,
        shipCity: order.shipCity,
        shipRegion: order.shipRegion,
        shipPostalCode: order.shipPostalCode,
        shipCountry: order.shipCountry,
        products: order.products ? order.products.map((product: ProductOrder) => ({
          productId: product.productId,
          productName: product.productName,
          quantity: product.quantity,
          orderPrice: product.orderPrice,
          totalPrice: product.totalPrice,
          discount: product.discount
        })) : []
      })),
      logs: data.logs ? data.logs.map((log: Log): Log => ({
        logsData: log.logsData,
        logs: log.logs,
        resultsCount: log.resultsCount
      })) : []
    };
  };
  
export const fetchOrderById = async (id: string): Promise<{ order: Order; logs: Log[] }> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/orders/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (data.order) {
        return {
        order: {
            id: data.order.orderId,
            customerId: data.order.customerId,
            totalPrice: data.order.totalPrice,
            totalProducts: data.order.totalProducts,
            totalQuantity: data.order.totalQuantity,
            totalDiscount: data.order.totalDiscount,
            shipName: data.order.shipName,
            shipVia: data.order.shipVia,
            freight: data.order.freight,
            orderDate: data.order.orderDate,
            requiredDate: data.order.requiredDate,
            shippedDate: data.order.shippedDate,
            shipCity: data.order.shipCity,
            shipRegion: data.order.shipRegion,
            shipPostalCode: data.order.shipPostalCode,
            shipCountry: data.order.shipCountry,
            products: data.order.products ? data.order.products.map((product: ProductOrder) => ({
            productId: product.productId,
            productName: product.productName,
            quantity: product.quantity,
            orderPrice: product.orderPrice,
            totalPrice: product.totalPrice,
            discount: product.discount
            })) : []
        },
        logs: data.logs ? data.logs.map((log: Log): Log => ({
            logsData: log.logsData,
            logs: log.logs,
            resultsCount: log.resultsCount
        })) : []
        };
    } else {
        throw new Error('Order data is missing or malformed');
    }
};
  
export const fetchProducts = async (page: number, rowsPerPage: number): Promise<ApiResponse<Product>> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/products?page=${page}&pageSize=${rowsPerPage}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    return {
      totalCount: parseInt(data.total, 10),
      data: data.data.map((product: ApiProduct): Product => ({
        id: product.productId?.toString() || '',
        name: product.name || '',
        supplierID: product.supplierID?.toString() || '',
        supplierName: product.supplierName || '',
        categoryID: product.categoryID?.toString() || '',
        quantityPerUnit: product.quantityPerUnit || '',
        unitPrice: product.price || '',
        unitsInStock: product.stock || 0,
        unitsOnOrder: product.orders || 0,
        reorderLevel: product.reorderLevel || 0,
        discontinued: product.discontinued || 0,
      })),
      logs: data.logs ? data.logs.map((log: Log): Log => ({
        logsData: log.logsData,
        logs: log.logs,
        resultsCount: log.resultsCount
      })) : []
    };
  };
  
export const fetchProductById = async (id: string): Promise<{ product: Product; logs: Log[] }> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/products/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (data.product && data.product.length > 0) {
        const product = data.product[0];
        return {
        product: {
            id: product.productID?.toString() || '',
            name: product.productName || '',
            supplierID: product.supplierID?.toString() || '',
            supplierName: product.supplierName || '',
            categoryID: product.categoryID?.toString() || '',
            quantityPerUnit: product.quantityPerUnit || '',
            unitPrice: product.unitPrice || '',
            unitsInStock: product.unitsInStock || 0,
            unitsOnOrder: product.unitsOnOrder || 0,
            reorderLevel: product.reorderLevel || 0,
            discontinued: product.discontinued || 0,
        },
        logs: data.logs ? data.logs.map((log: Log): Log => ({
            logsData: log.logsData,
            logs: log.logs,
            resultsCount: log.resultsCount
        })) : []
        };
    } else {
        throw new Error('Product data is missing or malformed');
    }
};
  
export const fetchSuppliers = async (page: number, rowsPerPage: number): Promise<ApiResponse<Supplier>> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/suppliers?page=${page}&pageSize=${rowsPerPage}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
  
    return {
      totalCount: parseInt(data.total, 10),
      data: data.data.map((supplier: ApiSupplier): Supplier => ({
        id: supplier.id.toString(),
        companyName: supplier.companyName,
        contactName: supplier.contactName,
        contactTitle: supplier.contactTitle,
        address: supplier.address || '', 
        city: supplier.city,
        region: supplier.region || '', 
        postalCode: supplier.postalCode || '', 
        country: supplier.country,
        phone: supplier.phone || '', 
        fax: supplier.fax || '', 
        homePage: supplier.homePage || ''
      })),
      logs: data.logs ? data.logs.map((log: Log): Log => ({
        logsData: log.logsData,
        logs: log.logs,
        resultsCount: log.resultsCount
      })) : []
    };
};

export const fetchSupplierById = async (id: string): Promise<{ supplier: Supplier; logs: Log[] }> => {
    const response = await fetch(`https://northwindtraders-sparkling-dawn-9488.fly.dev/suppliers/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
  
    if (data.supplier && data.supplier.length > 0) {
      const supplier = data.supplier[0];
      return {
        supplier: {
          id: supplier.supplierID,
          companyName: supplier.companyName,
          contactName: supplier.contactName,
          contactTitle: supplier.contactTitle,
          address: supplier.address,
          city: supplier.city,
          region: supplier.region,
          postalCode: supplier.postalCode,
          country: supplier.country,
          phone: supplier.phone,
          fax: supplier.fax,
          homePage: supplier.homePage,
        },
        logs: data.logs ? data.logs.map((log: Log): Log => ({
          logsData: log.logsData,
          logs: log.logs,
          resultsCount: log.resultsCount
        })) : []
      };
    } else {
      throw new Error('Supplier data is missing or malformed');
    }
  };
  
