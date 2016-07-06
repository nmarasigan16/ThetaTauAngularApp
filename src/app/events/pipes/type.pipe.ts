import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class TypePipe implements PipeTransform {

	transform(value, stub:string){
		if(!stub || stub == 'All'){
			return value;
		}
		let term = stub.toLocaleLowerCase();
		return value.filter((event) => term.startsWith(event.etype.toLocaleLowerCase()))
	}

}
