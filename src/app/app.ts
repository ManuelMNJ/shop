import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
    <header>
      <h1>My Store</h1>
      <nav>
        <a routerLink="/">Products</a>
        <a routerLink="/providers">Providers</a>
        <a routerLink="/cart" class="cart-button">Checkout</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'My Store';
}