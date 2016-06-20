import { Pipe } from '@angular/core';

@Pipe({
	name: "search"
})

export class SearchPipe{
	transform(value, stub: string){
		if(typeof stub == 'undefined' || !stub){
			return value;
		}
		let term = stub.toLocaleLowerCase();
		return value.filter((event) => event.name.toLocaleLowerCase().startsWith(term))
	}
}