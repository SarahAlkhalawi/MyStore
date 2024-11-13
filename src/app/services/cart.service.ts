import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { ProductService } from './product.service';
import { Product } from '../models/Product'


@Injectable({
  providedIn: 'root'
})
export class CartService {

  listCartProducts: Cart[];
  name: string = '';
  address: string ;
  cardNumber: number;
  total: number;

  constructor(private productService: ProductService) {
    this.listCartProducts = [];
    this.name = '';
    this.address = '';
    this.cardNumber = 0;
    this.total = 0;
   }

   getProducts(): Cart[]{
    return this.listCartProducts;
   }


   addToCart(cart: Cart): void {
    const productExist = this.listCartProducts.find(p => p.product.id === cart.product.id);
    if (productExist) {
      for (const c of this.listCartProducts) {
        if (c.product.id === cart.product.id) {
          c.quantity += cart.quantity;
          break;
        }
      }
    } else {
      this.listCartProducts.push(cart);
    }
    alert(`${cart.quantity} ${cart.product.name} has been added!`);
  }

  totalPrice(): number {
    var total = 0;
    this.listCartProducts.forEach((c) => {
      total += c.product.price * c.quantity;
    });
    return (total.toFixed(2) as unknown) as number;
  }

  deleteProductFromCart(productId: number): void {
    const productIndex = this.listCartProducts.findIndex(p => p.product.id === productId);
    if (productIndex !== -1) {
      this.listCartProducts.splice(productIndex, 1);
      alert(`Product has been removed from the cart!`);
    } else {
      alert('Product not found in the cart.');
    }
  }

  addOrder(name: string, address: string, card: number, total: number): void {
    this.name = name;
    this.address = address;
    this.cardNumber = card;
    this.total = total;
  }

  getOrderInfo() {
    const order = {
      name: this.name,
      address: this.address,
      card: this.cardNumber,
      total: this.total
    };
    return order;
  }

  deleteAllProducts(): void{
    this.listCartProducts =[]; 
  }
}
