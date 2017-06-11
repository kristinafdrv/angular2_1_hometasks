import { Component } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	
})
export class AppComponent {
	cart: Product[];

	constructor(private cartService: CartService) {

	}
	ngOnInit() {
		this.cart = this.cartService.cart;
	}
}