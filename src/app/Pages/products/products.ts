import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products: any[] = [];

  constructor(private apiservices: Apiservices) {}

  ngOnInit() {
  this.apiservices.getProduct().subscribe((data: any) => {
    this.products = data;
    console.log(this.products);
  });
}
}
