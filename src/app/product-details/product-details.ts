import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { products } from '../products';
import { CartService } from '../services/cart';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})



export class ProductDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cartService = inject(CartService);
  product: Product | undefined;
  submitting = false;
  
  
  constructor() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(p => p.id === productId);
    
  }
  
  
  
  addToCart(product: Product) {
    this.cartService.addToCart(product); 
    product.stock-=1;
    window.alert('Your product has been added to the cart!');
  }
}