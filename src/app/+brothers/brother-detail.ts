import {Component, Input} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import {Brother} from './brother.ts'

@Component({
	selector:'brother-list',
	templateUrl:'app/+brothers/brother-detail.html',
	directives: [MATERIAL_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})

export class BrotherDetailComponent{

	constructor(private routeParams: RouteParams, private router: Router){

	}

	ngOnInit() {
		/** implement service to get specific brother **/
	}
	brother:Brother = {"id": 1, "name": "John", "email": "asdas@asdasd", "phone_number": "123456789", "city": "Champaign"}

	goBack(){
		let link = ['Brothers'];
		this.router.navigate(link); 
	}
}