import { Product } from './models/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    providerId: 1,
    stock: 10
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    providerId: 2,
    stock: 0
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A standard phone with good features',
    providerId: 3,
    stock: 3
  }
];