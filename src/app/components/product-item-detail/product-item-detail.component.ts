import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent {

  QTY: number;
  @Input() product: Product;

  constructor(private cartService: CartService, private productService: ProductService, private route: ActivatedRoute){
    this.QTY = 1;
    this.product = new Product();
  }

  ngOnInit(): void {
    //extract the product ID 
    const id = +this.route.snapshot.paramMap.get('id')!;
  
    this.productService.getProducts().subscribe((res) => {
      this.product = res.find((product) => product.id == id) as Product;
    });
  }

  addToCart(product: Product, quantity: number): void {
    const cart: Cart = { product, quantity };
    this.cartService.addToCart(cart);
  }
  
}
