import { Product } from '../product';
import { Category } from '../category';

export const PRODUCTS: Product[] = [
	{
		id: 1,
		name: "Pepperoni pizza",
		description: "Pizza with pepperoni",
		price: 13.05,
		category: Category.Pastry,
		isAvailable: true,
		ingredients: ["pepperoni", "cheese", "tomato sauce", "dough"],
		equivalents: ["Margarita pizza", "Bavarian pizza"],
		selected: true
	},
	{
		id: 2,
		name: "Margarita pizza",
		description: "Basic pizza",
		price: 9.25,
		category: Category.Pastry,
		isAvailable: true,
		ingredients: ["cheese", "tomato sauce", "dough"],
		equivalents: ["Pepperoni pizza", "Bavarian pizza"],
		selected: false
	},
	{
		id: 3,
		name: "Bavarian pizza",
		description: "Pizza with pepperoni",
		price: 14.00,
		category: Category.Pastry,
		isAvailable: false,
		ingredients: ["bavarian sausage", "cheese", "tomato sauce", "dough"],
		equivalents: ["Pepperoni pizza", "Bavarian pizza"],
		selected: false
	},
	{
		id: 3,
		name: "Carbonara",
		description: "Savory delicious pasta",
		price: 10.50,
		category: Category.Pasta,
		isAvailable: true,
		ingredients: ["bacon", "egg", "spaghetti", "parmesan"],
		equivalents: ["Bolognese pasta"],
		selected: false
	},
	{
		id: 4,
		name: "Bolognese pasta",
		description: "Italian classic",
		price: 11.20,
		category: Category.Pasta,
		isAvailable: true,
		ingredients: ["meat", "tomato", "tagliatelle", "parmesan", "celery"],
		equivalents: ["Carbonara"],
		selected: false
	},
];