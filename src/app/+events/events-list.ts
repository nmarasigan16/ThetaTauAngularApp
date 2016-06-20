import {Component, Input} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {SearchPipe} from './search/search-pipe';
import {TypePipe} from './search/type-pipe';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {Event} from './event.ts'

@Component({
	selector:'event-list',
	pipes: [SearchPipe, TypePipe],
	template:`
		<md-data-table layout-fill>
			<thead>
			<tr>
				<th class="md-text-cell">Name</th>
				<th class="md-text-cell">Date</th>
				<th class="md-text-cell">Location</th>
				<th class="md-text-cell">Type</th>
			</tr>
			</thead>
			<tbody>
			<tr *ngFor="let event of events | filter: type | search:term" (click)="gotoDetail(event.id)">
				<td class="md-text-cell">{{event.name}}</td>
				<td class="md-text-cell">{{event.date}}</td>
				<td class="md-text-cell">{{event.location}}</td>
				<td class="md-text-cell">{{event.type}}</td>
			</tr>
			</tbody>
		</md-data-table>
	`,
	directives: [MATERIAL_DIRECTIVES]
})

export class EventListComponent{
	@Input()
	term: string;
	@Input()
	type: string;

	public events = EVENTS;

	constructor(private router: Router){

	}


	Log(){
		console.log(this.term);
	}

	/**TODO input service for getting brother list**/
	gotoDetail(event_id: number) {
		console.log(event_id)
		let link = ['EventDetail', { id: event_id }];
		this.router.navigate(link); 
	}
}

var EVENTS: Event[]=[
	{"id": 1, "name": "Happy Hour", "date": new Date(9, 16, 2016), "location": "Regends", "about": "a", "type": "BR"},
	{ "id": 2, "name": "Habitat for Humanity", "date": new Date(8,29,2016), "location": "Champaign Park", "about": "", "type": "PH" },
	{ "id": 3, "name": "Tech Talk", "date": new Date(12, 9, 2016), "location": "EHall", "about": "a", "type": "PR" },
	{ "id": 4, "name": "Happy Hour", "date": new Date(9, 16, 2016), "location": "Regends", "about": "a", "type": "BR" },
	{ "id": 5, "name": "Habitat for Humanity", "date": new Date(8, 29, 2016), "location": "Champaign Park", "about": "a", "type": "PH" },
	{ "id": 6, "name": "Tech Talk", "date": new Date(12, 9, 2016), "location": "EHall", "about": "a", "type": "PR" },
	{ "id": 7, "name": "Happy Hour", "date": new Date(9, 16, 2016), "location": "Regends", "about": "a", "type": "BR" },
	{ "id": 8, "name": "Habitat for Humanity", "date": new Date(8, 29, 2016), "location": "Champaign Park", "about": "a", "type": "PH" },
	{ "id": 9, "name": "Tech Talk", "date": new Date(12, 9, 2016), "location": "EHall", "about": "a", "type": "PR" },
	{ "id": 10, "name": "Happy Hour", "date": new Date(9, 16, 2016), "location": "Regends", "about": "a", "type": "BR" },
	{ "id": 11, "name": "Habitat for Humanity", "date": new Date(8, 29, 2016), "location": "Champaign Park", "about": "a", "type": "PH" },
	{ "id": 12, "name": "Tech Talk", "date": new Date(12, 9, 2016), "location": "EHall", "about": "a", "type": "PR" },
]
