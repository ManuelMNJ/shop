import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../services/cart';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css'
})
export class ShippingComponent implements OnInit {
  cartService = inject(CartService);
  shippingCosts: any[] = [];

  ngOnInit() {
    this.cartService.getShippingPrices().subscribe(data => {
      this.shippingCosts = data;
    });
  }
}