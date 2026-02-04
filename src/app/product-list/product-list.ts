import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}