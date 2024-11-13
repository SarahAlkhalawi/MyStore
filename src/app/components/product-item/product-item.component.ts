import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  QTY: number;
  @Input() product: Product;
  @Output() addProductToCart: EventEmitter<Cart> = new EventEmitter();

  constructor() {
    this.QTY = 1;
    this.product = new Product();
  }

  addToCart(): void {
    const cart: Cart = { product: this.product, quantity: this.QTY };
    this.addProductToCart.emit(cart);
  }
}
