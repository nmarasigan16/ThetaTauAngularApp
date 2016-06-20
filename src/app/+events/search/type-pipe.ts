import { Pipe } from '@angular/core';

@Pipe({
	name: "filter"
})

export class TypePipe {
	transform(value, stub:string) {
		if (!stub) {
			return value;
		}
		let term = stub.toLocaleLowerCase();
		return value.filter((event) => event.type.toLocaleLowerCase().startsWith(term))
	}
}