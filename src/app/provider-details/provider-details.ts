import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProviderService } from '../services/provider';
import { Provider } from '../models/provider';
import { Product } from '../models/product';
import { products } from '../products';

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './provider-details.html',
  styleUrl: './provider-details.css'
})
export class ProviderDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  providerService = inject(ProviderService);
  provider = signal<Provider | undefined>(undefined);
  providerProducts = signal<Product[]>([]);

  ngOnInit() {
    const providerId = Number(this.route.snapshot.paramMap.get('providerId'));
    
    this.providerService.getProviders().subscribe(data => {
      this.provider.set(data.find(p => p.id === providerId));
    });

    this.providerProducts.set(products.filter(p => p.providerId === providerId));
  }
}