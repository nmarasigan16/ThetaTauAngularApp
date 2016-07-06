import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPipe } from '../pipes/search.pipe';
import { TypePipe } from '../pipes/type.pipe';
import { FullPipe } from '../pipes/full.pipe';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { Event } from '../../properties/event'
import { EventService } from '../event.service';

@Component({
	moduleId: module.id,
	selector:'event-list',
	pipes:[ SearchPipe, TypePipe, FullPipe ],
	directives: [MATERIAL_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_TOOLBAR_DIRECTIVES ],
	templateUrl: 'event-list.html',
	styleUrls: ['event-list.css']

})
export class EventListComponent implements OnInit{

	types = TYPES;
	events: any;
	subscription: any;
	errorMessage: string;

	constructor(private router: Router, private service: EventService){}

	ngOnInit(){
		this.getEvents();
	}

	getEvents(){
		this.subscription = this.service.getEvents()
			.subscribe(
				events => this.events = events,
				error => this.errorMessage = error
				);
	}

	gotoDetail(id:number){
		this.router.navigate(['/events', id]);
	}

	ngOnDestroy(){
		if(this.subscription){
			this.subscription.unsubscribe();
		}
	}

}


var TYPES: any[] = [
	{"label": "All", "value": ""},
	{"label": "Professional", "value":"PR"},
	{ "label": "Brotherhood", "value": "BR" },
	{ "label": "Philanthropy", "value": "PH" },
]
