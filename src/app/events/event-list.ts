import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';
import { TypePipe } from './pipes/type.pipe';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Event } from '../properties/event'

@Component({
	selector:'event-list',
	pipes:[ SearchPipe, TypePipe ],
	directives: [MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ],
	templateUrl: './app/templates/event-list.html',
	styleUrls: ['./app/styles/event-list.css']

})
export class EventListComponent{

	public types = TYPES;
	public events = EVENTS;

	constructor(private router: Router){}

	gotoDetail(id:number){
		this.router.navigate(['/events', id]);
	}

}


var TYPES: any[] = [
	{"label": "All", "value": ""},
	{"label": "Professional", "value":"PR"},
	{ "label": "Brotherhood", "value": "BR" },
	{ "label": "Philanthropy", "value": "PH" },
]

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