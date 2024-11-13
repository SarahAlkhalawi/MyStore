import { Product } from './Product';

export class Cart {
  quantity: number;
  product: Product;

  constructor() {
    this.quantity = 1;
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: ''
    };
  }
}