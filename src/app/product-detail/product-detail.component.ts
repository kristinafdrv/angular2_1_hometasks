import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product-list/product-list.service';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { Category } from '../category';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	prod: Product;

	constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService, private location: Location) { }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			if (params['id'] !== undefined) {
				let id = +params['id'];
				this.prod = this.productService.getProduct(id);
			}
		});
	}
	OnBuy(item: Product) {
		this.cartService.cart.push(item);
	}
	GoBack() {
		this.location.back();
	}
}
