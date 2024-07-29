import { Product } from '../types';

export const productsData: Product [] = [
    {
        id: 1,
        name: 'Chai',
        quantityPerUnit: '10 boxes x 20 bags',
        unitPrice: '$18',
        unitsInStock: 39,
        unitsInOrder: 10,
        supplier: 'Exotic Liquids',
        supplierId: 1,
        reorderLevel: 10,
        discontinued: false
    },
    {
        id: 2,
        name: 'Chang',
        quantityPerUnit: '24 - 12 oz bottles',
        unitPrice: '$19',
        unitsInStock: 17,
        unitsInOrder: 40,
        supplier: 'Exotic Liquids',
        supplierId: 1,
        reorderLevel: 25,
        discontinued: false
    },
    {
        id: 3,
        name: 'Aniseed Syrup',
        quantityPerUnit: '12 - 550 ml bottles',
        unitPrice: '$10',
        unitsInStock: 13,
        unitsInOrder: 70,
        supplier: 'Exotic Liquids',
        supplierId: 1,
        reorderLevel: 25,
        discontinued: false
    },
    {
        id: 4,
        name: 'Chef Anton\'s Cajun Seasoning',
        quantityPerUnit: '48 - 6 oz jars',
        unitPrice: '$22',
        unitsInStock: 53,
        unitsInOrder: 0,
        supplier: 'New Orleans Cajun Delights',
        supplierId: 2,
        reorderLevel: 0,
        discontinued: false
    },
    {
        id: 5,
        name: 'Chef Anton\'s Gumbo Mix',
        quantityPerUnit: '36 boxes',
        unitPrice: '$21.35',
        unitsInStock: 0,
        unitsInOrder: 0,
        supplier: 'New Orleans Cajun Delights',
        supplierId: 2,
        reorderLevel: 0,
        discontinued: true
    },
    {
        id: 6,
        name: 'Grandma\'s Boysenberry Spread',
        quantityPerUnit: '12 - 8 oz jars',
        unitPrice: '$25',
        unitsInStock: 120,
        unitsInOrder: 0,
        supplier: 'New Orleans Cajun Delights',
        supplierId: 2,
        reorderLevel: 25,
        discontinued: false
    },
    {
        id: 7,
        name: 'Uncle Bob\'s Organic Dried Pears',
        quantityPerUnit: '12 - 1 lb pkgs.',
        unitPrice: '$30',
        unitsInStock: 15,
        unitsInOrder: 0,
        supplier: 'New Orleans Cajun Delights',
        supplierId: 2,
        reorderLevel: 10,
        discontinued: false
    },
]