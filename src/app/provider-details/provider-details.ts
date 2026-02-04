import { Component, OnInit, inject } from '@angular/core';
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
  provider: Provider | undefined;
  providerProducts: Product[] = [];

  ngOnInit() {
    const providerId = Number(this.route.snapshot.paramMap.get('providerId'));
    
    this.providerService.getProviders().subscribe(data => {
      this.provider = data.find(p => p.id === providerId);
    });

    this.providerProducts = products.filter(p => p.providerId === providerId);
  }
}