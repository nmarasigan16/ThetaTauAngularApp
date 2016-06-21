import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(value, stub:string){
		if(!stub){
			return value;
		}
		let term = stub.toLocaleLowerCase();
		return value.filter((event) => event.name.toLocaleLowerCase().startsWith(term))
	}
}
