import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: any = [];
  id: any;
  size: any;
  quantity: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private httpClient: HttpClient,
    private activeRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private renderer: Renderer2) {

    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.size = this.activeRoute.snapshot.queryParamMap.get('size');
    this.quantity = this.activeRoute.snapshot.queryParamMap.get('quantity');

  }

  ngOnInit(): void {
    this.getProduct(this.id);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
  addJsToComponent(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
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
