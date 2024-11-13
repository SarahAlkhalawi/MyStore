import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  name: string;
  address: string ;
  cardNumber: number;
  total: number;

  constructor(private cartService: CartService) {
    this.name = '';
    this.address = '';
    this.cardNumber = 0;
    this.total = 0;
   }

   ngOnInit(): void{
    this.name = this.cartService.getOrderInfo().name;
    this.address = this.cartService.getOrderInfo().address;
    this.cardNumber = this.cartService.getOrderInfo().card;
    this.total = this.cartService.getOrderInfo().total;
   }

   deleteAll() : void{
    this.cartService.deleteAllProducts();
   }
}
