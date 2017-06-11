import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from './product-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
	providers: [ProductService]
})
export class ProductListComponent implements OnInit {
	selectedProduct: Product;
	products: Product[];
	constructor(private productService: ProductService, private router: Router) { }

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this.products = this.productService.getProducts();
	}

	onSelect(item: Product) {
		this.selectedProduct = item;
	}
	goTo(item: Product) {
		this.router.navigate(['/product', item.id]);
	}
}
