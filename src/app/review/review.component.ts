import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  products: any = [];
  id: any;
  size: any;
  quantity: any;
  titulo: string = "Review and Confirmation";

  constructor(private httpClient: HttpClient,
    private activeRoute: ActivatedRoute,
    ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.size = this.activeRoute.snapshot.queryParamMap.get('size');
    this.quantity = this.activeRoute.snapshot.queryParamMap.get('quantity');
 
  }

  ngOnInit(): void {
    this.getProduct(this.id);
  }

  getProduct(product) {
    this.httpClient.get("assets/json/products.json")
      .subscribe(data => {
        this.products = data;

        product === '' ?
          this.products = data :
          this.products.results = this.products.results
            .filter(p => p.id == product);

        return this.products.results;
      })
  }

}
