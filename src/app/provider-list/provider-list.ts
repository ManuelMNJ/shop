import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProviderService } from '../services/provider';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './provider-list.html',
  styleUrl: './provider-list.css'
})
export class ProviderListComponent implements OnInit {
  providerService = inject(ProviderService);
  providers = signal<Provider[]>([]);

  ngOnInit() {
    this.providerService.getProviders().subscribe(data => {
      this.providers.set(data);
    });
  }
}