import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'full'
})
export class FullPipe implements PipeTransform {

  transform(value: string): string {
    if(value == 'PH'){
    	return 'Philanthropy';
    }
    else if(value == 'PR'){
    	return 'Professional';
    }
    else if(value == 'BR'){
    	return 'Brotherhood';
    }
    else{
    	return 'NTYPE';
    }
  }

}