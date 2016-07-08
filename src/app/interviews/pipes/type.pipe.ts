import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any): any {
    if(value == 'B'){
    	return "Brother";
    }
    else if(value == 'Brother'){
    	return "B";
    }
    else if(value == 'Pledge'){
    	return "P";
    }
    else if(value == 'P'){
    	return "Pledge";
    }
  }

}
