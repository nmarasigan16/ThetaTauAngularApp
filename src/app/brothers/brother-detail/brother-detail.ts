/** NOTE THAT THIS BREAKS ON REFRESH AT THE MOMENT.  FIX MAY COME WHEN SERVICE IS IMPLEMENTED **/

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Brother } from '../../properties/brother';

@Component({
	moduleId: module.id,
	selector: 'brother-detail',
	templateUrl: 'brother-detail.html',
	styleUrls: ['brother-detail.css'],
	directives: [ MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ]	
})
export class BrotherDetailComponent{

	constructor(private router: Router){

	}

	brother:Brother = {"id": 1, "name": "John", "email": "asdas@asdasd", "phone_number": "123456789", "city": "Champaign"}

	goBack(){
		let link = ['/brothers'];
		this.router.navigate(link); 
	}

}
