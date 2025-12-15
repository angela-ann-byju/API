import { Component, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Apiservices } from "../../apiservices";

@Component({
  selector: "app-singleview-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./singleview-list.html",
})
export class SingleviewList {

  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private api: Apiservices,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");

      if (id) {
        this.api.getsingleProducts(id).subscribe((res: any) => {
          this.product = res;
          console.log("PRODUCT LOADED:", res);
          this.cdr.detectChanges();   // 🔥 IMPORTANT FIX
        });
      }
    });
  }
}
