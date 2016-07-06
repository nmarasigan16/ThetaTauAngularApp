import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EventService } from './event.service';

@Component({
	moduleId: module.id,
	selector: 'event-component',
	template: `
	<router-outlet></router-outlet>
	`,
	directives: [ ROUTER_DIRECTIVES ],
	providers: [ EventService ]
})
export class EventComponent{

};
