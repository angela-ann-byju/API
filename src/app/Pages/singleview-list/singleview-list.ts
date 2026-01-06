import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Apiservices } from '../../apiservices';

@Component({
  selector: 'app-singleview-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleview-list.html'
})
export class SingleviewList implements OnInit {

  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private api: Apiservices,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');
      if (!id) return;

      this.product = null;

      this.api.getSingleProduct(id).subscribe(res => {

        this.product = res;
        console.log('PRODUCT LOADED:', res);

        // 🔥 force refresh UI
        this.cdr.detectChanges();
      });
    });
  }
}
