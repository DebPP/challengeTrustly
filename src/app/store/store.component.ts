import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: any = [];
  sizes: any = [];
  quantitys: any = [];
  product : string = ""
  selectedSize;
  selectedValue;
  titulo: string = "Sneakers"

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getProducts('');
    this.setSizes();
    this.setQuantitys();
    
  }

  getProducts(product) {
    this.product = product;
    this.httpClient.get("assets/json/products.json")
      .subscribe(data => {
        this.products = data;

        product === '' ?
          this.products = data : 
          this.products.results = this.products.results
          .filter(p => p.description.toLowerCase()
          .includes(product));
        
      })
  }
  
  setSizes() {
    return this.sizes = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10.5]
  }

  setQuantitys() {
    return this.quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
}
