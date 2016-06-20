import {Component, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {SearchPipe} from './search/search-pipe';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {Brother} from './brother.ts'

@Component({
	selector:'brother-list',
	pipes: [SearchPipe],
	template:`
		<md-data-table layout-fill>
			<thead>
			<tr>
				<th class="md-text-cell sorted-ascending">Name</th>
				<th class="md-text-cell">Email</th>
				<th>Phone Number</th>
				<th class="md-text-cell">City</th>
			</tr>
			</thead>
			<tbody>
			<tr *ngFor="let brother of brothers | search: term" (click)="gotoDetail(brother.id)">
				<td class="md-text-cell sorted-ascending">{{brother.name}}</td>
				<td class="md-text-cell">{{brother.email}}</td>
				<td>{{brother.phone_number}}</td>
				<td class="md-text-cell">{{brother.city}}</td>
			</tr>
			</tbody>
		</md-data-table>
	`,
	directives: [MATERIAL_DIRECTIVES]
})

export class BrotherListComponent{
	@Input()
	term: string;

	constructor(private router: Router){

	}

	public brothers = BROTHERS;
	/**TODO input service for getting brother list**/
	gotoDetail(brother_id: number) {
		let link = ['BrotherDetail', { id: brother_id }];
		this.router.navigate(link); 
	}
}

var BROTHERS: Brother[] = [
	{"id": 1, "name": "john", "email": "asdas@asdasd", "phone_number": "123456789", "city": "Champaign"},
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
