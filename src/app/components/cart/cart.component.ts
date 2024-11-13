import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/Cart';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  fullName: string = '';
    address: string;
  cardNumber: number;
  cart: Cart[];
  total: number;

  constructor(private cartService: CartService, private router: Router){
    this.cart = [];
    this.total = 0;
    this.address = '';
    this.cardNumber = 0;
  }

  ngOnInit(): void {
    this.cart = this.cartService.getProducts();
    this.getTotal();

    // this.name = 'Sarah ';  
    // console.log("Name initialized:", this.name);
  }

  updateQuantity(cart: Cart): void {
    const productExist = this.cart.find((p) => p.product.id == cart.product.id);
    if (productExist) {
      productExist.quantity = cart.quantity;
    }
    this.getTotal();
  }

  getTotal(): void {
    this.total = this.cartService.totalPrice();
  }

  delete(id: number){
    this.cartService.deleteProductFromCart(id);
    this.getTotal();

  }
  submitOrder(): void {
    console.log('Name:', this.fullName); 
    this.cartService.addOrder(
      this.fullName,
      this.address,
      this.cardNumber,
      this.total
    );
    this.router.navigate(['confirmation']);
  }


  onNameChange(newName: string): void {
    console.log("Name updated:", newName);
  }
}
