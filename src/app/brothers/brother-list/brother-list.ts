import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search-pipe';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Brother } from '../../properties/brother'

@Component({
	moduleId: module.id,
	selector:'brother-list',
	pipes:[ SearchPipe ],
	directives: [MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ],
	templateUrl: 'brother-list.html',
	styleUrls: ['brother-list.css']

})
export class BrotherListComponent{

	public brothers = BROTHERS;

	constructor(private router: Router){}

	gotoDetail(id:number){
		this.router.navigate(['/brothers', id]);
	}

}

var BROTHERS: Brother[] = [
	{ "id": 1, "name": "john", "email": "asdas@asdasd", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 2, "name": "chris", "email": "serser@gkldkgl", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 3, "name": "Mike", "email": "ASDA@asdg", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 4, "name": "matt", "email": "abdbdf@asddsdg", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 5, "name": "tom ", "email": "bdbfd@asdgdd", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 6, "name": "jesus", "email": "grgr@gsdgsd", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 7, "name": "jess", "email": "asd@bfdbf", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 8, "name": "brittany", "email": "asd@fhdfh", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 9, "name": "michael", "email": "Gfdgdfg@gfdsd", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 10, "name": "Tom", "email": "asdvfd@asdasd", "phone_number": "123456789", "city": "Champaign" },
	{ "id": 11, "name": "Link", "email": "fdghdfgh@sadfs", "phone_number": "123456789", "city": "Champaign" },
]