import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],   
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];

  constructor(private apiservices: Apiservices) {}

  ngOnInit() {
    this.apiservices.getProduct().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }
}
