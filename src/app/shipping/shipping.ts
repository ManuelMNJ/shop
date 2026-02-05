import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css'
})
export class ShippingComponent implements OnInit {
  cartService = inject(CartService);
  shippingCosts = signal<{type: string, price: number}[]>([]);

  ngOnInit() {
    this.cartService.getShippingPrices().subscribe(data => {
      this.shippingCosts.set(data);
    });
  }
}