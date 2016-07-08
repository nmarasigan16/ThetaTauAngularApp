import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

	transform(value, stub:string){
		if(!stub || stub == 'All'){
			return value;
		}
		/** 
		stub[0] is used here because there is no meeting types with the two same starting letters 
		If there were to be meeting types with the same starting letter, this would need to change
		**/
		let term = stub[0].toLocaleLowerCase();
		return value.filter((meeting) => meeting.mtype.toLocaleLowerCase().startsWith(term))
	}

}