﻿import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class CartService {
	cart: Product[] = [];
}