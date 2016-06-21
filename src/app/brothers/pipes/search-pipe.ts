import { Pipe } from '@angular/core';

@Pipe({
	name: "search"
})

export class SearchPipe{
	transform(value, stub:string){
		if(!stub){
			return value;
		}
		let term = stub.toLocaleLowerCase();
		return value.filter((brother) => brother.name.toLocaleLowerCase().startsWith(term))
	}
}