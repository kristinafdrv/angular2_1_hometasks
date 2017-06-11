import { Category } from './category';

export class Product {
	id: number;
	name: string;
	description: string;
	price: number;
	category: Category;
	isAvailable: boolean;
	ingredients: string[];
	equivalents: string[];
	selected: boolean;
	constructor(name, description, price, category, isAvailable) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.category = category;
		this.isAvailable = isAvailable;
	}
}