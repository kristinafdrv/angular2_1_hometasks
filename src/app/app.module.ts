import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product-list/product-list.service';
import { CartService } from './cart.service'
import { CategoryPipe } from './category.pipe'

const routes: Routes = [
	{ path: 'product/:id', component: ProductDetailComponent },
	{ path: 'products', component: ProductListComponent }
];

@NgModule({
  declarations: [
		AppComponent,
		ProductListComponent,
		ProductDetailComponent,
		CategoryPipe
  ],
  imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
  ],
	providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
