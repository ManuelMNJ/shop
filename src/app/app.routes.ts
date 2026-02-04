import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailsComponent } from './product-details/product-details';
import { CartComponent } from './cart/cart';
import { ShippingComponent } from './shipping/shipping';
import { ProviderListComponent } from './provider-list/provider-list';
import { ProviderDetailsComponent } from './provider-details/provider-details';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Product List'
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product Details'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Shopping Cart'
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    title: 'Shipping Prices'
  },
  {
    path: 'providers',
    component: ProviderListComponent,
    title: 'Providers'
  },
  {
    path: 'providers/:providerId',
    component: ProviderDetailsComponent,
    title: 'Provider Details'
  }
];