import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: string): string {
    if(value == 'GM'){
    	return 'General Meeting';
    }
    else if(value == 'VO'){
    	return 'Voting';
    }
    else if(value == 'PM'){
    	return 'Pledge Meeting';
    }
    else if(value == 'IN'){
    	return 'Initiation';
    }
    else if(value == 'All'){
        return value;
    }
    else{
        return 'None';
    }
  }

}