import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ApiTestService } from '../api-test.service';
import { Now } from '../now';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  now: Now | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private api: ApiTestService
  ) {}

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been aded to the cart!');
  }

  getNow(): void {
    this.api.getNow().subscribe(now => this.now = now);
  }
  
  ngOnInit() {
    //First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const productUrlNameFromRoute = routeParams.get('productUrlName');

    //this.product = products.find(product => product.id === productIdFromRoute);
    this.product = products.find(product => product.urlName === productUrlNameFromRoute);

    this.getNow();
    
  }
}
