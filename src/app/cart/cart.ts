import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  cartService = inject(CartService);
  formBuilder = inject(FormBuilder);
  
  items = this.cartService.getItems();
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    window.alert('Your order has been submitted!');
  }
}