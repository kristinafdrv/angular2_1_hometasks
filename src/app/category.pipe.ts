import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './category';

@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
	transform(value: string, args: string[]): any {
		return Category[value];
	}
}